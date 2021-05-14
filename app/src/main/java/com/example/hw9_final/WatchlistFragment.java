package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link WatchlistFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class WatchlistFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public WatchlistFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment WatchlistFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static WatchlistFragment newInstance(String param1, String param2) {
        WatchlistFragment fragment = new WatchlistFragment();
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


    SharedPreferences sp;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_watchlist, container, false);
        List<MovieModel> movieList = new ArrayList<>();
        sp = getActivity().getSharedPreferences("watchlist", Context.MODE_PRIVATE);
        Map<String, ?> map = sp.getAll();
        TextView emptyView = view.findViewById(R.id.empty_watchlist);
        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.watchlist_view);
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(),3);
        recyclerView.setLayoutManager(gridLayoutManager);

            for(String key:map.keySet()){
                Set<String> set = sp.getStringSet(key,null);
                if(set==null) continue;
                String title = "";
                String img = "";
                String category = "";
//                List<String> tmpList = new ArrayList<>();
                for(String cur:set){
//                    tmpList.add(cur);
                    System.out.println("watch list ==============="+cur);
                    if(cur.charAt(0)=='h') img = cur;
                    else if(cur.equals("movie")||cur.equals("tv")) category = cur;
                    else title = cur;
                }
                System.out.println("~~~~~~~~~~~~~~~~~~~~~~one row~~~~~~~~~~~~~~~~~~~");
                movieList.add(new MovieModel(key,title,img,category));
            }
            WatchAdapter watchAdapter = new WatchAdapter(getActivity().getApplicationContext(),movieList,emptyView);


            ItemTouchHelper.Callback callback = new ItemMoveCallback(watchAdapter);
            ItemTouchHelper touchHelper = new ItemTouchHelper(callback);
            touchHelper.attachToRecyclerView(recyclerView);
            recyclerView.setAdapter(watchAdapter);
            emptyView.setVisibility(recyclerView.getAdapter()==null||recyclerView.getAdapter().getItemCount()==0?View.VISIBLE:View.GONE);



        return view;
    }
}