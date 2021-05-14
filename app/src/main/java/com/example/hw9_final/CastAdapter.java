package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import java.util.List;

public class CastAdapter extends RecyclerView.Adapter<CastAdapter.MyViewHolder> {
    private List<String> castList;
    private List<String> castNames;
    Context context;
    public class MyViewHolder extends RecyclerView.ViewHolder {
        ImageView image;
        TextView name;
        public MyViewHolder(View itemView) {
            super(itemView);
            image = (ImageView) itemView.findViewById(R.id.profile_image);
            name = (TextView)itemView.findViewById(R.id.cast_name);
        }
    }
    public CastAdapter(Context context, List<String> castList, List<String> castNames) {
        this.context = context;
        this.castList = castList;
        this.castNames = castNames;
    }
    @NonNull
    @Override
    public CastAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.cast_list, parent, false);
        return new CastAdapter.MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.name.setText(castNames.get(position));
        Glide.with(holder.image)
                .load(castList.get(position))
                .fitCenter()
                .into(holder.image);
    }





    @Override
    public int getItemCount() {
        return castList.size();
    }
}
