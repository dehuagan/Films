package com.example.hw9_final;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;

import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Handler;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link HomeFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class HomeFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public HomeFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment HomeFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static HomeFragment newInstance(String param1, String param2) {
        HomeFragment fragment = new HomeFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }

    }





    private List<MovieModel> movieList = new ArrayList<>();

    private List<MovieModel> popularList = new ArrayList<>();

    LinearLayout loading;
//    private MoviesAdapter mAdapter;



//    ProgressDialog dialog=new ProgressDialog(context);
//    ProgressDialog dialog;
    Handler handler = new Handler();
    private Toolbar toolbar;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment


        View view = inflater.inflate(R.layout.fragment_home, container, false);
//        dialog = new ProgressDialog(getContext());
//        dialog.setCancelable(false);
//        dialog.setInverseBackgroundForced(false);
//        dialog.show();
//        view.getSupportActionBar().hide();
        loading = (LinearLayout) view.findViewById(R.id.loading);
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                loading.setVisibility(View.GONE);
            }
        },3000);
        TextView footer = view.findViewById(R.id.footer);
        footer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url1 = "https://www.themoviedb.org/";
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url1));
                startActivity(browserIntent);
            }
        });

        getSliderData("https://csci571-309912.wm.r.appspot.com/apis/trending_movies",view,"movie");
        getListData("https://csci571-309912.wm.r.appspot.com/apis/top_rated_movies",view,"top","movie");
        getListData("https://csci571-309912.wm.r.appspot.com/apis/popular_movies",view,"popular","movie");
        toolbar = view.findViewById(R.id.my_toolbar);
        toolbar.inflateMenu(R.menu.toolbar_menu);
        toolbar.setLogo(R.drawable.ic_theaters_white_18dp);
        toolbar.setTitle("USC Films");
        SpannableString click_movie = new SpannableString("Movies");
        click_movie.setSpan(new ForegroundColorSpan(Color.WHITE), 0, click_movie.length(), 0);
        SpannableString unclick_movie = new SpannableString("Movies");
        unclick_movie.setSpan(new ForegroundColorSpan(Color.rgb(34, 84, 123)), 0, unclick_movie.length(), 0);
        SpannableString click_tv = new SpannableString("TV Shows");
        click_tv.setSpan(new ForegroundColorSpan(Color.WHITE), 0, click_tv.length(), 0);
        SpannableString unclick_tv = new SpannableString("TV Shows");
        unclick_tv.setSpan(new ForegroundColorSpan(Color.rgb(34, 84, 123)), 0, unclick_tv.length(), 0);
        toolbar.getMenu().findItem(R.id.movies).setTitle(click_movie);
        toolbar.setOnMenuItemClickListener(item -> {

            switch (item.getItemId()) {
                case R.id.movies:
                    item.setTitle(click_movie);
                    toolbar.getMenu().findItem(R.id.tvs).setTitle(unclick_tv);
                    getSliderData("https://csci571-309912.wm.r.appspot.com/apis/trending_movies",view,"movie");
                    getListData("https://csci571-309912.wm.r.appspot.com/apis/top_rated_movies",view,"top","movie");
                    getListData("https://csci571-309912.wm.r.appspot.com/apis/popular_movies",view,"popular","movie");
//                    TextView tv = (TextView) view.findViewById(R.id.test_view);
//                    tv.setText("movie");
                    return true;
                case R.id.tvs:
                    item.setTitle(click_tv);
                    toolbar.getMenu().findItem(R.id.movies).setTitle(unclick_movie);
                    getSliderData("https://csci571-309912.wm.r.appspot.com/apis/trending_tv",view,"tv");
                    getListData("https://csci571-309912.wm.r.appspot.com/apis/top_rated_tv",view,"top","tv");
                    getListData("https://csci571-309912.wm.r.appspot.com/apis/popular_tv",view,"popular","tv");
//                    TextView tv1 = (TextView) view.findViewById(R.id.test_view);
//                    tv1.setText("tv");
                    return true;
                default:
                    return false;
            }
        });




        return view;
    }



    private void getSliderData(String url, View view, String movie_or_tv) {
        System.out.println("enter getdata");
//        RequestQueue q = Volley.newRequestQueue(getActivity());
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            ArrayList<MovieModel> sliderDataArrayList = new ArrayList<>();
                            for (int i = 0; i < jsonArray.length(); i++) {
                                if(i==6) break;
                                JSONObject item = jsonArray.getJSONObject(i);
                                System.out.println("poster:================>" +item.getString("poster_path") );
                                sliderDataArrayList.add(new MovieModel(item.getString("id"),item.getString("title"),"https://image.tmdb.org/t/p/w500"+item.getString("poster_path"),movie_or_tv));

                            }
                            setSlider(view,sliderDataArrayList);
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
        MySingleton.getInstance(getActivity().getApplicationContext()).addToRequestQueue(jsonObjectRequest);
    }

    private void setSlider(View view,ArrayList<MovieModel> sliderDataArrayList){
        System.out.println("enter setslider====");

//         initializing the slider view.
        SliderView sliderView = view.findViewById(R.id.slider);

        // adding the urls inside array list
//        sliderDataArrayList.add(new SliderData(url1));
//        sliderDataArrayList.add(new SliderData(url2));
//        sliderDataArrayList.add(new SliderData(url3));

        // passing this array list inside our adapter class.
        SliderAdapter adapter = new SliderAdapter(getContext(), sliderDataArrayList);

        // below method is used to set auto cycle direction in left to
        // right direction you can change according to requirement.
        sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);

        // below method is used to
        // setadapter to sliderview.
        sliderView.setSliderAdapter(adapter);

        // below method is use to set
        // scroll time in seconds.
        sliderView.setScrollTimeInSec(6);

        // to set it scrollable automatically
        // we use below method.
        sliderView.setAutoCycle(true);

        // to start autocycle below method is used.
        sliderView.startAutoCycle();
    }


    private void getListData(String url, View view, String category, String movie_or_tv){
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("res_array");
                            List<MovieModel> moviesList = new ArrayList<>();
                            for (int i = 0; i < jsonArray.length(); i++) {
                                JSONObject item = jsonArray.getJSONObject(i);
                                if(item.getString("id")==null||item.getString("title")==null||item.getString("poster_path")==null) continue;
                                System.out.println("poster:================>" +item.getString("poster_path") );
                                String id= item.getString("id");
                                String title = item.getString("title");
                                String img_path = "https://image.tmdb.org/t/p/w500"+item.getString("poster_path");
                                moviesList.add(new MovieModel(id,title,img_path,movie_or_tv));

                            }
                            setMoviesList(view,category,moviesList);
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
        MySingleton.getInstance(getActivity().getApplicationContext()).addToRequestQueue(jsonObjectRequest);

    }


    private void setMoviesList(View view, String category, List<MovieModel> movieImgs){
        RecyclerView recyclerView = null;
        if(category.equals("popular")){
            recyclerView = (RecyclerView)view.findViewById(R.id.popular_view);
        }else{
            recyclerView = (RecyclerView)view.findViewById(R.id.toprated_view);
        }

        GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(),1, LinearLayoutManager.HORIZONTAL,false);
        recyclerView.setLayoutManager(gridLayoutManager);
        MoviesAdapter moviesAdapter = new MoviesAdapter(getActivity().getApplicationContext(),movieImgs);
        recyclerView.setAdapter(moviesAdapter);
    }


}