package com.example.hw9_final;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.media.Image;
import android.net.Uri;
import android.os.Bundle;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.borjabravo.readmoretextview.ReadMoreTextView;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

public class Detail extends AppCompatActivity {

    private String movie_id, movie_category, video_key, img, movieTitle;
    private ImageButton facebookBtn,twitterBtn,addBtn;
    SharedPreferences sp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);
        Intent intent = getIntent();
        movie_id = intent.getStringExtra("id");
        movie_category = intent.getStringExtra("category");
        img = intent.getStringExtra("img");
//        movieTitle = intent.getStringExtra("title");
        System.out.println("detail====> " + movie_id + " , " + movie_category);
        setYoutube();
        setDetail();
        getCast();
        System.out.println("<=======================enter review========================>"+movie_id);
        String url = "https://csci571-309912.wm.r.appspot.com/apis/reviews?id=" + movie_id + "&category=" + movie_category;
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            System.out.println("review============================>"+jsonArray);
                            List<ReviewModel> reviewList = new ArrayList<>();
                            for(int i=0;i<jsonArray.length();i++){
                                if(i==3) break;
                                JSONObject item = jsonArray.getJSONObject(i);
                                Log.e("reviews==========>", item.toString());
                                if(item.getString("content")==null) continue;

                                String author =item.getString("author")!=null?item.getString("author"):"null";
                                String content = item.getString("content");
                                String time = item.getString("created_at").substring(0,10);
                                String rating = "";
                                if(item.getString("rating").length()>0) rating = item.getString("rating");
                                else rating = "0";

//                                String rating = item.getString("rating")==null?"null" :String.valueOf(Integer.parseInt(item.getString("rating"))/2);
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date date = sdf.parse(time);
                                DateFormat df = new SimpleDateFormat("E, MMM dd yyyy", Locale.ENGLISH);
                                String dateStr = df.format(date);
                                reviewList.add(new ReviewModel(author,content,dateStr,rating));
                                System.out.println("review==========================>"+author);
                            }
                            if(reviewList.size()>0){
                                TextView reviewTxt = new TextView(getApplicationContext());
                                reviewTxt.setTextColor(Color.rgb(0,88,171));

                                LinearLayout layout = findViewById(R.id.review_section);
                                reviewTxt.setText("Reviews");
                                reviewTxt.setTextAppearance(getApplicationContext(),R.style.myTextView);
                                layout.addView(reviewTxt);


                                LinearLayoutManager linearLayoutManager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);

                                RecyclerView recyclerView = (RecyclerView) findViewById(R.id.review);
                                ReviewAdapter reviewAdapter = new ReviewAdapter(getApplicationContext(),reviewList);
                                recyclerView.setLayoutManager(linearLayoutManager);
                                recyclerView.setAdapter(reviewAdapter);

                            }

                        } catch (JSONException | ParseException e) {
                            e.printStackTrace();
                        }

                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        error.printStackTrace();

                    }
                });
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);
//        getReview();
        getRecommend();









    }



    private void setYoutube() {
        String url = "https://csci571-309912.wm.r.appspot.com/apis/video?id=" + movie_id + "&category=" + movie_category;
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            JSONObject item = jsonArray.getJSONObject(0);
                            video_key = item.getString("key");
                            YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                            getLifecycle().addObserver(youTubePlayerView);
                            youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                                @Override
                                public void onReady(YouTubePlayer youTubePlayer) {
                                    youTubePlayer.loadVideo(video_key, 0);
                                }
                            });

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        System.out.println("result:================>" + response.toString());

//                        textView.setText("Response: " + response.toString());
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        error.printStackTrace();

                    }
                });
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);

    }


    private void setDetail() {
        String url = "https://csci571-309912.wm.r.appspot.com/apis/detail_info?id=" + movie_id + "&category=" + movie_category;
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            String title = response.getString("title");
                            JSONArray genres = response.getJSONArray("genres");
                            String genresStr = "";
                            for (int i = 0; i < genres.length(); i++) {
                                JSONObject item = genres.getJSONObject(i);
                                if (i == genres.length() - 1) {
                                    genresStr += item.getString("name");
                                } else {
                                    genresStr += item.getString("name") + ", ";
                                }

                            }
                            String overview = response.getString("overview");
                            String year = "";
                            if(movie_category.equals("tv")){
                                year =  response.getString("first_air_date").substring(0,4);
                            }else{
                                year = response.getString("release_date").substring(0,4);
                            }

                            TextView titleText = findViewById(R.id.item_title);
                            titleText.setText(title);
                            ReadMoreTextView overviewText = (ReadMoreTextView)findViewById(R.id.overview);
                            overviewText.setText(overview);
                            TextView genresText = findViewById(R.id.genres);
                            genresText.setText(genresStr);
                            TextView yearText = findViewById(R.id.year);
                            yearText.setText(year);

                            facebookBtn = (ImageButton)findViewById(R.id.facebook);
                            twitterBtn = (ImageButton)findViewById(R.id.twitter);
                            addBtn = (ImageButton)findViewById(R.id.add_to_list);


                            sp = getSharedPreferences("watchlist", Context.MODE_PRIVATE);
                            if(sp.contains(movie_id)){
                                addBtn.setImageDrawable(getDrawable(R.drawable.ic_baseline_remove_circle_outline_24));
                            }else{
                                addBtn.setImageDrawable(getDrawable(R.drawable.ic_baseline_add_circle_outline_24));
                            }
                            addBtn.setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    SharedPreferences.Editor editor = sp.edit();
                                    if(sp.contains(movie_id)){
                                        editor.remove(movie_id);
                                        addBtn.setImageDrawable(getDrawable(R.drawable.ic_baseline_add_circle_outline_24));
                                        Toast.makeText(getApplicationContext(), title+" was removed to Watchlist", Toast.LENGTH_SHORT).show();
                                    }else{
                                        Set<String> set = sp.getStringSet(movie_id, null);
                                        set = new HashSet<>();
//                                        set.add(movie_id);
                                        set.add(title);
                                        set.add(movie_category);
                                        set.add(img);
                                        editor.putStringSet(movie_id, set);
                                        addBtn.setImageDrawable(getDrawable(R.drawable.ic_baseline_remove_circle_outline_24));
                                        Toast.makeText(getApplicationContext(), title+" was added to Watchlist", Toast.LENGTH_SHORT).show();
                                    }
                                    editor.commit();
                                }
                            });

//                            addBtn.setOnClickListener(new View.OnClickListener() {
//                                public void onClick(View v) {
//                                    System.out.println("=========click save============");
////                SharedPreferences.Editor editor = sp.edit();
////                System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^editor^^^^^^^"+editor);
//                                }
//                            });



                            facebookBtn.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    String url2 = "https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/" + movie_category + "/" + movie_id + "?language=en-US";
                                    Log.e("facebook link=====> ",url2);
                                    Intent browserIntent2 = new Intent(Intent.ACTION_VIEW, Uri.parse(url2));
                                    browserIntent2.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                    startActivity(browserIntent2);
                                    // Do something in response to button click
                                }
                            });

                            twitterBtn.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    String query = URLEncoder.encode("check this out\nhttps://www.themoviedb.org/" + movie_category + "/" + movie_id + "?language=en-US");
                                    String url3 = "https://twitter.com/intent/tweet?text=" + query;
                                    Intent browserIntent3 = new Intent(Intent.ACTION_VIEW, Uri.parse(url3));
                                    browserIntent3.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                    startActivity(browserIntent3);
                                    // Do something in response to button click
                                }
                            });



                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        System.out.println("result:================>" + response.toString());

//                        textView.setText("Response: " + response.toString());
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        error.printStackTrace();

                    }
                });
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);

    }


    private void getCast(){
        String url = "https://csci571-309912.wm.r.appspot.com/apis/cast?id=" + movie_id + "&category=" + movie_category;
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            List<String> castList = new ArrayList<>();
                            List<String> castNames = new ArrayList<>();
                            for(int i=0;i<jsonArray.length();i++){
                                if(i==6) break;
                                JSONObject item = jsonArray.getJSONObject(i);
                                castList.add(item.getString("profile_path"));
                                castNames.add(item.getString("name"));
                            }
                            if(castList.size()>0){
                                TextView castTxt = new TextView(getApplicationContext());
                                castTxt.setTextColor(Color.rgb(0,88,171));

                                LinearLayout layout = findViewById(R.id.cast_section);
                                castTxt.setText("Cast");
                                castTxt.setTextAppearance(getApplicationContext(),R.style.myTextView);
                                layout.addView(castTxt);

                                RecyclerView recyclerView = (RecyclerView)findViewById(R.id.cast_view);
                                GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(),2, LinearLayoutManager.HORIZONTAL,false);
                                recyclerView.setLayoutManager(gridLayoutManager);
                                CastAdapter castAdapter = new CastAdapter(getApplicationContext(),castList,castNames);
                                recyclerView.setAdapter(castAdapter);
                            }

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }

                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        error.printStackTrace();

                    }
                });
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);
    }


    private void getReview(){
//        System.out.println("<=======================enter review========================>"+movie_id);
//        String url = "https://csci571-309912.wm.r.appspot.com/apis/reviews?id=" + movie_id + "&category=" + movie_category;
//        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
//                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
//                    @Override
//                    public void onResponse(JSONObject response) {
//                        try {
//                            JSONArray jsonArray = response.getJSONArray("res_array");
//                            System.out.println("review============================>"+jsonArray);
//                            List<ReviewModel> reviewList = new ArrayList<>();
//                            for(int i=0;i<jsonArray.length();i++){
//                                if(i==3) break;
//                                JSONObject item = jsonArray.getJSONObject(i);
//                                Log.e("reviews==========>", item.toString());
//                                if(item.getString("content")==null) continue;
//
//                                String author =item.getString("author")!=null?item.getString("author"):"null";
//                                String content = item.getString("content");
//                                String time = item.getString("created_at").substring(0,10);
//                                String rating = "";
//                                if(item.getString("rating").length()>0) rating = item.getString("rating");
//                                else rating = "0";
//
////                                String rating = item.getString("rating")==null?"null" :String.valueOf(Integer.parseInt(item.getString("rating"))/2);
//                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//                                Date date = sdf.parse(time);
//                                DateFormat df = new SimpleDateFormat("E, MMM dd yyyy", Locale.ENGLISH);
//                                String dateStr = df.format(date);
//                                reviewList.add(new ReviewModel(author,content,dateStr,rating));
//                                System.out.println("review==========================>"+author);
//                            }
//                            if(reviewList.size()>0){
//                                TextView reviewTxt = new TextView(getApplicationContext());
//                                reviewTxt.setTextColor(Color.rgb(0,88,171));
//
//                                LinearLayout layout = findViewById(R.id.review_section);
//                                reviewTxt.setText("Reviews");
//                                reviewTxt.setTextAppearance(getApplicationContext(),R.style.myTextView);
//                                layout.addView(reviewTxt);
//
//
//                                LinearLayoutManager linearLayoutManager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);
//
//                                RecyclerView recyclerView = (RecyclerView) findViewById(R.id.review);
//                                ReviewAdapter reviewAdapter = new ReviewAdapter(getApplicationContext(),reviewList);
//                                recyclerView.setLayoutManager(linearLayoutManager);
//                                recyclerView.setAdapter(reviewAdapter);
//
//                            }
//
//                        } catch (JSONException | ParseException e) {
//                            e.printStackTrace();
//                        }
//
//                    }
//                }, new Response.ErrorListener() {
//
//                    @Override
//                    public void onErrorResponse(VolleyError error) {
//                        // TODO: Handle error
//                        error.printStackTrace();
//
//                    }
//                });
//        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);

    }


    private void getRecommend(){
        String url = "https://csci571-309912.wm.r.appspot.com/apis/recommended?id=" + movie_id + "&category=" + movie_category;
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            List<MovieModel> moviesList = new ArrayList<>();
                            for (int i = 0; i < jsonArray.length(); i++) {
                                JSONObject item = jsonArray.getJSONObject(i);
                                if(item.getString("poster_path")==null) continue;
                                System.out.println("poster:================>" +item.getString("poster_path") );
                                String id= item.getString("id");

                                String title = "";
                                if(movie_category.equals("tv")){
                                    title=item.getString("name");
                                }else{
                                    title = item.getString("title");
                                }
                                String img_path = "https://image.tmdb.org/t/p/w500"+item.getString("poster_path");
                                moviesList.add(new MovieModel(id,title,img_path,movie_category));

                            }
                            setMoviesList(moviesList);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        System.out.println("result:================>" + response.toString());

//                        textView.setText("Response: " + response.toString());
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        error.printStackTrace();

                    }
                });
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest);

    }

    private void setMoviesList(List<MovieModel> movieImgs){
        RecyclerView recyclerView = (RecyclerView)findViewById(R.id.recommend_view);

        GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(),1, LinearLayoutManager.HORIZONTAL,false);
        recyclerView.setLayoutManager(gridLayoutManager);
        MoviesAdapter moviesAdapter = new MoviesAdapter(getApplicationContext(),movieImgs);
        recyclerView.setAdapter(moviesAdapter);
    }
}