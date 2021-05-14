const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
let router = express.Router();
const api_key = '?api_key=0d425b588a26d902dfb7dc63380dfc49'


router.route('').get((req,res)=>{
    var arg = req.query;
    console.log('query: '+arg.id);
    var id = arg.id;
    let result = {};
    // var category = arg.category;
    const url = "https://api.themoviedb.org/3/person/"+id+"/external_ids"+api_key+"&language=en-US&page=1";
    axios.get(url)
        .then(response=>{
            new_obj = {}=response.data;
            result = {
                imdb_id:new_obj.imdb_id,
                facebook_id:new_obj.facebook_id,
                instagram_id:new_obj.instagram_id,
                twitter_id:new_obj.twitter_id,
            }
            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        });
})
module.exports = router;
