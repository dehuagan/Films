const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
let router = express.Router();
const api_key = '?api_key=0d425b588a26d902dfb7dc63380dfc49'
https://api.themoviedb.org/3/movie/464052?api_key=0d425b588a26d902dfb7dc63380dfc49&language=en-US&page=1

router.route('').get((req,res)=>{
    var arg = req.query;
    console.log('query: '+arg.id);
    var id = arg.id;
    var category = arg.category;
    const url = "https://api.themoviedb.org/3/"+category+"/"+id+api_key+"&language=en-US&page=1";
    axios.get(url)
        .then(response=>{
            let result = {},
            new_obj = {}=response.data;
            if(category=='movie'){
                result = {
                    title:new_obj.title,
                    genres:new_obj.genres,
                    spoken_languages:new_obj.spoken_languages,
                    release_date:new_obj.release_date,
                    runtime:new_obj.runtime,
                    overview:new_obj.overview,
                    vote_average:new_obj.vote_average,
                    tagline:new_obj.tagline,
                };
            }else{
                result = {
                    title:new_obj.name,
                    genres:new_obj.genres,
                    spoken_languages:new_obj.spoken_languages,
                    first_air_date:new_obj.first_air_date,
                    episode_run_time:new_obj.episode_run_time,
                    overview:new_obj.overview,
                    vote_average:new_obj.vote_average,
                    tagline:new_obj.tagline
                };
            }
            

            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        });
})
module.exports = router;
