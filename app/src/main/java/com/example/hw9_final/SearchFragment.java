package com.example.hw9_final;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.os.Bundle;



import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;


import android.widget.SearchView;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.bumptech.glide.Glide;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link SearchFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class SearchFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public SearchFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment SearchFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static SearchFragment newInstance(String param1, String param2) {
        SearchFragment fragment = new SearchFragment();
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

    private ArrayList<MovieModel> movieList = new ArrayList<>();
    RecyclerView list;
    SearchView editsearch;
    SearchListAdapter adapter;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_search, container, false);

        list = (RecyclerView) view.findViewById(R.id.search_result_list);
//
//        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.watchlist_view);
        LinearLayoutManager layout = new LinearLayoutManager(getActivity().getApplicationContext());
        list.setLayoutManager(layout);

        editsearch = (SearchView)view.findViewById(R.id.search_bar);
        editsearch.setQueryHint("Search movies and TV");
        editsearch.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                String url = "https://csci571-309912.wm.r.appspot.com/apis/search?query=" + query;
                JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                        (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                            @Override
                            public void onResponse(JSONObject response) {
                                movieList.clear();
                                try {
                                    JSONArray jsonArray = response.getJSONArray("res_array");

                                    for(int i=0;i<jsonArray.length();i++){
                                        JSONObject item = jsonArray.getJSONObject(i);
                                        Log.e("search result===>",item.getString("title"));
                                        movieList.add(new MovieModel(item.getString("id"),item.getString("title"),item.getString("backdrop_path"),item.getString("poster_path"),item.getString("media_type"),item.getString("rating"),item.getString("date")));

                                    }
                                    adapter = new SearchListAdapter(getActivity().getApplicationContext(),movieList);
                                    list.setAdapter(adapter);

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
                MySingleton.getInstance(getActivity().getApplicationContext()).addToRequestQueue(jsonObjectRequest);

                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                newText = newText.toLowerCase(Locale.getDefault());
                movieList.clear();
                if(newText.length()==0){
                    adapter = new SearchListAdapter(getActivity().getApplicationContext(),movieList);
                    adapter.movieList.clear();
                    list.setAdapter(adapter);
                    adapter.notifyDataSetChanged();
                }else{
                    String url = "https://csci571-309912.wm.r.appspot.com/apis/search?query=" + newText;
                    JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                            (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
                                @Override
                                public void onResponse(JSONObject response) {
                                    movieList.clear();
                                    try {
                                        JSONArray jsonArray = response.getJSONArray("res_array");

                                        for(int i=0;i<jsonArray.length();i++){
                                            JSONObject item = jsonArray.getJSONObject(i);
                                            Log.e("search result===>",item.getString("title"));
                                            movieList.add(new MovieModel(item.getString("id"),item.getString("title"),item.getString("backdrop_path"),item.getString("poster_path"),item.getString("media_type"),item.getString("rating"),item.getString("date")));

                                        }
                                        adapter = new SearchListAdapter(getActivity().getApplicationContext(),movieList);
                                        list.setAdapter(adapter);

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
                    MySingleton.getInstance(getActivity().getApplicationContext()).addToRequestQueue(jsonObjectRequest);
                }

                return false;
            }
        });



        return view;
    }
}