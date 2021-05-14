package com.example.hw9_final;

public class MovieModel {
    private String id, title, img_path,category,rating,date,backdrop;

    public MovieModel() {
    }

    public MovieModel(String id, String title, String img_path,String category) {
        this.id = id;
        this.title = title;
        this.img_path = img_path;
        this.category = category;
    }

    public MovieModel(String id, String title, String img_path,String category,String rating,String date) {
        this.id = id;
        this.title = title;
        this.img_path = img_path;
        this.category = category;
        this.rating = rating;
        this.date = date;
    }
    public MovieModel(String id, String title,String backdrop, String img_path,String category,String rating,String date) {
        this.id = id;
        this.title = title;
        this.backdrop = backdrop;
        this.img_path = img_path;
        this.category = category;
        this.rating = rating;
        this.date = date;
    }

    public String getBackdrop() {
        return backdrop;
    }

    public void setBackdrop(String backdrop) {
        this.backdrop = backdrop;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String name) {
        this.title = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImg_path() {
        return img_path;
    }

    public void setImg_path(String img_path) {
        this.img_path = img_path;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}