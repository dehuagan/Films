package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class SearchListAdapter extends RecyclerView.Adapter<SearchListAdapter.ViewHolder> {
    Context context;
    List<MovieModel> movieList;
    public SearchListAdapter(Context context,List<MovieModel> movieList){
        this.context = context;
        this.movieList = movieList;


    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.search_list, parent, false);
        return new SearchListAdapter.ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.category.setText("by "+movieList.get(position).getCategory());
        holder.rating.setText(movieList.get(position).getRating());
        if(movieList.get(position).getCategory().equals("movie")){
            holder.category.setText("MOVIE ("+movieList.get(position).getDate()+")");
        }else holder.category.setText("TV ("+movieList.get(position).getDate()+")");
        holder.title.setText(movieList.get(position).getTitle());
        Glide.with(holder.img)
                    .load(movieList.get(position).getBackdrop())
                    .fitCenter()
                    .into(holder.img);
        holder.img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, Detail.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.putExtra("id", movieList.get(position).getId());
                intent.putExtra("category",movieList.get(position).getCategory());
                intent.putExtra("img",movieList.get(position).getImg_path());
                context.startActivity(intent); // start Intent
            }
        });
    }

    @Override
    public int getItemCount() {
        return movieList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView img;
        TextView category;
        TextView rating;
        TextView title;
        public ViewHolder(View view){
            super(view);
            category = (TextView)view.findViewById(R.id.result_category);
            img = (ImageView)view.findViewById(R.id.result_img);
            title = (TextView)view.findViewById(R.id.search_result_title);
            rating = (TextView)view.findViewById(R.id.result_rating);
        }
    }

}
