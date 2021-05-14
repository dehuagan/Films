var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cors = require('cors');

var search = require("./routes/search");
var current_movies = require("./routes/current_movies");
var popular_movies = require("./routes/popular_movies");
var top_rated_movies = require("./routes/top_movies");
var trending_movies = require("./routes/trend_movies");
var popular_tv = require("./routes/popular_tv");
var top_rated_tv = require("./routes/top_tv");
var trending_tv = require("./routes/trend_tv");
var video = require("./routes/video");
var detail_info = require("./routes/detail_info");
var cast_detail = require("./routes/cast_detail");
var cast = require("./routes/cast");
var external_ids = require("./routes/external_ids");
var reviews = require("./routes/reviews");
var recommended = require("./routes/recommend");
var similar = require("./routes/similar");

var app = express();

const corsOptions = {
  "origin": "*"
};

let variable = "/apis";

app.use(cors(corsOptions));
app.use(variable + "/search", search);
app.use(variable + "/current_movies", current_movies);
app.use(variable + "/popular_movies", popular_movies);
app.use(variable + "/top_rated_movies", top_rated_movies);
app.use(variable + "/trending_movies", trending_movies);
app.use(variable + "/popular_tv", popular_tv);
app.use(variable + "/top_rated_tv", top_rated_tv);
app.use(variable + "/trending_tv", trending_tv);
app.use(variable + "/detail_info", detail_info);
app.use(variable + "/video", video);
app.use(variable + "/cast", cast);
app.use(variable + "/cast_detail", cast_detail);
app.use(variable + "/external_ids", external_ids);
app.use(variable + "/reviews", reviews);
app.use(variable + "/similar", similar);
app.use(variable + "/recommended", recommended);

app.use(express.static(path.join(__dirname, 'dist/frontend')));

app.use('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})

app.listen(2000, function () {
  console.log("Express API is running at port 2000");
})

module.exports = app;
