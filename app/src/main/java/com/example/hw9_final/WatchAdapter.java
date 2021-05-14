package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import java.util.Collections;
import java.util.List;

public class WatchAdapter extends RecyclerView.Adapter<WatchAdapter.WatchViewHolder> implements ItemMoveCallback.ItemTouchHelperContract{

    List<MovieModel> movieList;
    Context context;
    TextView emptyView;
    public WatchAdapter(Context context,List<MovieModel> movieList,TextView emptyView){
        this.context = context;
        this.movieList = movieList;
        this.emptyView = emptyView;
    }

    @NonNull
    @Override
    public WatchViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.grid, parent, false);
        // set the view's size, margins, paddings and layout parameters
        WatchViewHolder vh = new WatchViewHolder(v); // pass the view to View Holder
        return vh;
    }


    @Override
    public void onBindViewHolder(WatchViewHolder holder, final int position) {
        RequestOptions options = new RequestOptions().error(R.drawable.ic_outline_error_outline_24).bitmapTransform(new RoundedCorners(40));
        Glide.with(holder.grid_image)
                .load(movieList.get(position).getImg_path())
                .apply(options)
                .into(holder.grid_image);
        holder.categoryTxt.setText(movieList.get(position).getCategory());
        holder.grid_image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, Detail.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                intent.putExtra("id", (Parcelable) moviesList.get(position));
                intent.putExtra("id", movieList.get(position).getId());
                intent.putExtra("category",movieList.get(position).getCategory());
                intent.putExtra("img",movieList.get(position).getImg_path());
//                intent.putExtra("title",moviesList.get(position).getTitle());
                context.startActivity(intent); // start Intent
            }
        });

        SharedPreferences sp = context.getSharedPreferences("watchlist", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        holder.removeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println("``````````````````````````click remove btn");
                Log.e("click remove=====>",String.valueOf(position));
                editor.remove(movieList.get(position).getId());
                editor.commit();
                Toast.makeText(context,movieList.get(position).getTitle()+" was removed",Toast.LENGTH_SHORT).show();
                notifyDataSetChanged();
                movieList.remove(position);
                if(movieList.size()==0){
                    emptyView.setVisibility(View.VISIBLE);
                }



            }
        });
    }

    @Override
    public int getItemCount() {
        return movieList.size();
    }

    public class WatchViewHolder extends RecyclerView.ViewHolder{
        ImageView grid_image;
        TextView categoryTxt;
        ImageButton removeBtn;

        public WatchViewHolder(View itemView) {
            super(itemView);
            grid_image = (ImageView)itemView.findViewById(R.id.grid_image);
            categoryTxt = (TextView) itemView.findViewById(R.id.grid_category);
            removeBtn = (ImageButton) itemView.findViewById(R.id.removeBtn);
        }
    }
    @Override
    public void onRowMoved(int fromPosition, int toPosition) {
        Log.e("from ========>",fromPosition+"");
        if (fromPosition < toPosition) {
            for (int i = fromPosition; i < toPosition; i++) {
                Collections.swap(movieList, i, i + 1);
            }
        } else {
            for (int i = fromPosition; i > toPosition; i--) {
                Collections.swap(movieList, i, i - 1);
            }
        }
        notifyItemMoved(fromPosition, toPosition);
    }


    @Override
    public void onRowSelected(WatchViewHolder myViewHolder) {
//        myViewHolder.rowView.setBackgroundColor(Color.GRAY);

    }

    @Override
    public void onRowClear(WatchViewHolder myViewHolder) {
//        myViewHolder.rowView.setBackgroundColor(Color.WHITE);

    }

}
