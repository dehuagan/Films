package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.List;

public class ReviewAdapter extends RecyclerView.Adapter<ReviewAdapter.MyViewHolder> {
    private List<ReviewModel> reviewModelList;
    Context context;
    public class MyViewHolder extends RecyclerView.ViewHolder {
        TextView author;
        TextView rating;
        TextView content;
        public MyViewHolder(View itemView) {
            super(itemView);
            author = (TextView) itemView.findViewById(R.id.author);
            rating = (TextView)itemView.findViewById(R.id.rating);
            content = (TextView)itemView.findViewById(R.id.review_content);

        }
    }
    public ReviewAdapter(Context context,  List<ReviewModel> reviewModelList) {
        this.context = context;
        this.reviewModelList = reviewModelList;

    }
    @NonNull
    @Override
    public ReviewAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.review_list, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.author.setText("by "+reviewModelList.get(position).getAuthor()+" on "+reviewModelList.get(position).getTime());
        holder.rating.setText(reviewModelList.get(position).getRating()+"/5");
        holder.content.setText(reviewModelList.get(position).getContent());
        holder.content.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context, ReviewDetail.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.putExtra("content", reviewModelList.get(position).getContent());
                intent.putExtra("author","by "+reviewModelList.get(position).getAuthor()+"on"+reviewModelList.get(position).getTime());
                intent.putExtra("rating",reviewModelList.get(position).getRating()+"/5");
//                intent.putExtra("category",mSliderItems.get(position).getCategory());
                context.startActivity(intent); // start Intent
            }
        });

    }





    @Override
    public int getItemCount() {
        return reviewModelList.size();
    }
}
