package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Parcelable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
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

import java.net.URLEncoder;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MoviesAdapter extends RecyclerView.Adapter<MoviesAdapter.MyViewHolder> {
    private List<MovieModel> moviesList;
    Context context;
    public class MyViewHolder extends RecyclerView.ViewHolder {
        // init the item view's
        ImageButton imageButton;
        ImageView image;
        public MyViewHolder(View itemView) {
            super(itemView);
            image = (ImageView) itemView.findViewById(R.id.image);
            imageButton = (ImageButton)itemView.findViewById(R.id.clickBtn);
        }
    }
    public MoviesAdapter(Context context, List<MovieModel> moviesList) {
        this.context = context;
        this.moviesList = moviesList;
    }
    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.list_item, parent, false);
        return new MyViewHolder(itemView);
    }
    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        // set the data in items

        RequestOptions options = new RequestOptions().error(R.drawable.ic_outline_error_outline_24).bitmapTransform(new RoundedCorners(30));
        if(moviesList.get(position).getImg_path()!=null){
            Glide.with(holder.image)
                    .load(moviesList.get(position).getImg_path())
                    .apply(options)
                    .into(holder.image);
        }


        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                System.out.println("click movie:================>"+moviesList.get(position).getId());
                // open another activity on item click
                Intent intent = new Intent(context, Detail.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                intent.putExtra("id", (Parcelable) moviesList.get(position));
                intent.putExtra("id", moviesList.get(position).getId());
                intent.putExtra("category",moviesList.get(position).getCategory());
                intent.putExtra("img",moviesList.get(position).getImg_path());
//                intent.putExtra("title",moviesList.get(position).getTitle());
                context.startActivity(intent); // start Intent
            }
        });

        holder.imageButton.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v) {
                        System.out.println("===click btn===");
                        PopupMenu popupMenu = new PopupMenu(context,holder.imageButton);
                        Menu menu = popupMenu.getMenu();
                        SharedPreferences sp = context.getSharedPreferences("watchlist", Context.MODE_PRIVATE);
                        if(sp.contains(moviesList.get(position).getId())){
                            menu.add(R.menu.popup_menu, 3,3,"Remove from Watchlist");
                        }else{
                            menu.add(R.menu.popup_menu, 3,3,"Add to Watchlist");
                        }
                        popupMenu.getMenuInflater().inflate(R.menu.popup_menu,menu);
                        popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                            @Override
                            public boolean onMenuItemClick(MenuItem item) {

                                switch (item.getItemId()) {
                                    case R.id.popup_tmdb:
                                        String url1 = "https://www.themoviedb.org/" + moviesList.get(position).getCategory() + "/" + moviesList.get(position).getId() + "?language=en-US";
                                        Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url1));
                                        browserIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                        context.startActivity(browserIntent);
                                        break;
                                    case R.id.popup_fb:
                                        String url2 = "https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/" + moviesList.get(position).getCategory() + "/" + moviesList.get(position).getId() + "?language=en-US";
                                        Log.e("facebook link=====> ",url2);
                                        Intent browserIntent2 = new Intent(Intent.ACTION_VIEW, Uri.parse(url2));
                                        browserIntent2.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                        context.startActivity(browserIntent2);
                                        break;
                                    case R.id.popup_twitter:
                                        String query = URLEncoder.encode("check this out\nhttps://www.themoviedb.org/" + moviesList.get(position).getCategory() + "/" + moviesList.get(position).getId() + "?language=en-US");
                                        String url3 = "https://twitter.com/intent/tweet?text=" + query;
                                        Intent browserIntent3 = new Intent(Intent.ACTION_VIEW, Uri.parse(url3));
                                        browserIntent3.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                        context.startActivity(browserIntent3);
                                        break;
                                    case 3:
                                        SharedPreferences.Editor editor = sp.edit();
                                        if (sp.contains(moviesList.get(position).getId())) {
                                            editor.remove(moviesList.get(position).getId());
                                            Toast.makeText(context, moviesList.get(position).getTitle() + " was removed to Watchlist", Toast.LENGTH_SHORT).show();
                                        } else {
                                            Set<String> set = sp.getStringSet(moviesList.get(position).getId(), null);
                                            set = new HashSet<>();
//                                          set.add(movie_id);
                                            set.add(moviesList.get(position).getTitle());
                                            set.add(moviesList.get(position).getCategory());
                                            set.add(moviesList.get(position).getImg_path());
                                            editor.putStringSet(moviesList.get(position).getId(), set);
                                            Toast.makeText(context, moviesList.get(position).getTitle() + " was added to Watchlist", Toast.LENGTH_SHORT).show();
                                        }
                                        editor.commit();
                                        break;
                                }

                                return true;
                            }
                        });
                        popupMenu.show();
                    }
                });


    }
    @Override
    public int getItemCount() {
        return moviesList.size();
    }
}
