package com.example.hw9_final;

import android.content.Intent;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.widget.TextView;

public class ReviewDetail extends AppCompatActivity {

    private String content, rating, author;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review_detail);
        Intent intent = getIntent();
        content = intent.getStringExtra("content");
        rating = intent.getStringExtra("rating");
        author = intent.getStringExtra("author");
        System.out.println("review_detail======="+content);
        TextView authorTxt = (TextView)findViewById(R.id.author_detail);
        authorTxt.setText(author);
        TextView contentTxt = (TextView)findViewById(R.id.content_detail);
        contentTxt.setText(content);
        TextView ratingTxt = (TextView)findViewById(R.id.rating_detail);
        ratingTxt.setText(rating);

    }
}