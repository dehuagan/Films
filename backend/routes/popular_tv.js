const express = require("express");
const axios = require("axios");
let router = express.Router();
const api_key = '?api_key=0d425b588a26d902dfb7dc63380dfc49'


router.route('').get((req,res)=>{
    const url = "https://api.themoviedb.org/3/tv/popular"+api_key+"&language=en-US&page=1";
    axios.get(url)
        .then(response=>{
            let result = {},
                res_array=[];
            index = 0;
            new_array = []=response.data.results;
            for(var i=0;i<new_array.length;i++){
                if(new_array[i].hasOwnProperty('poster_path')){
                    res_array.push({
                        id:new_array[i].id,
                        title:new_array[i].name,
                        poster_path:new_array[i].poster_path
                    });
                    index++;
                }
            }
            result['res_array'] = res_array;
            result['count'] = index;
            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        });
})
module.exports = router;
