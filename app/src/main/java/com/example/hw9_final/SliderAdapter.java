package com.example.hw9_final;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.smarteist.autoimageslider.SliderViewAdapter;

import java.util.ArrayList;
import java.util.List;

import jp.wasabeef.glide.transformations.BlurTransformation;

public class SliderAdapter extends SliderViewAdapter<SliderAdapter.SliderAdapterViewHolder> {
    Context context;

    // list for storing urls of images.
    private final List<MovieModel> mSliderItems;

    // Constructorx
    public SliderAdapter(Context context, ArrayList<MovieModel> sliderDataArrayList) {
        this.context = context;

        this.mSliderItems = sliderDataArrayList;
    }

    // We are inflating the slider_layout
    // inside on Create View Holder method.
    @Override
    public SliderAdapterViewHolder onCreateViewHolder(ViewGroup parent) {
        View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.slider_layout, null);
        return new SliderAdapterViewHolder(inflate);
    }

    // Inside on bind view holder we will
    // set data to item of Slider View.
    @Override
    public void onBindViewHolder(SliderAdapterViewHolder viewHolder, final int position) {

        final MovieModel sliderItem = mSliderItems.get(position);
        String imgUrl = sliderItem.getImg_path();
        // Glide is use to load image
        // from url in your imageview.
        Glide.with(viewHolder.itemView)
                .load(imgUrl)
                .apply(RequestOptions.bitmapTransform(new BlurTransformation(25,3)))
                .into(viewHolder.imgBackground);
        Glide.with(viewHolder.itemView)
                .load(imgUrl)
                .fitCenter()
                .into(viewHolder.imageView);

        viewHolder.imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                System.out.println("click slider===============>"+mSliderItems.get(position).getId());
                Intent intent = new Intent(context, Detail.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.putExtra("id", mSliderItems.get(position).getId());
                intent.putExtra("category",mSliderItems.get(position).getCategory());
                intent.putExtra("img",mSliderItems.get(position).getImg_path());
                context.startActivity(intent); // start Intent

//
//                System.out.println("u click=====> "+position+"  ,   "+mSliderItems.get(position).getImgUrl());
//                System.out.println("===click btn===");
//                PopupMenu popupMenu = new PopupMenu(context,viewHolder.imageView);
//                System.out.println("the menu has things=====> "+popupMenu.toString());
//                popupMenu.getMenuInflater().inflate(R.menu.popup_menu,popupMenu.getMenu());
//                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
//                    @Override
//                    public boolean onMenuItemClick(MenuItem item) {
//                        System.out.println("meny btn");
//                        Toast.makeText(context, "You Clicked " + item.getTitle(), Toast.LENGTH_SHORT).show();
//                        return true;
//                    }
//                });
//                popupMenu.show();
                // open another activity on item click
//                Intent intent = new Intent(context, SecondActivity.class);
//                intent.putExtra("image", personImages.get(position)); // put image data in Intent
//                context.startActivity(intent); // start Intent
            }
        });

    }

    // this method will return
    // the count of our list.
    @Override
    public int getCount() {
        return mSliderItems.size();
    }

    static class SliderAdapterViewHolder extends SliderViewAdapter.ViewHolder {
        // Adapter class for initializing
        // the views of our slider view.
        View itemView;
        ImageView imageView;
        ImageView imgBackground;

        public SliderAdapterViewHolder(View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.myimage);
            imgBackground = itemView.findViewById(R.id.background);
            this.itemView = itemView;
        }
    }
}
