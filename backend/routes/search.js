const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
let router = express.Router();
const api_key = '?api_key=0d425b588a26d902dfb7dc63380dfc49'


    router.route('').get((req,res)=>{
        var arg =  req.query;
        console.log('query: '+arg.id);
        var id = arg.id;
        var query = arg.query;
        const url = "https://api.themoviedb.org/3/search/multi"+api_key+"&language=en-US&query="+query;
        axios.get(url)
            .then(response=>{
                let result = {},
                    res_array=[];
                index = 0;
                new_array = []=response.data.results;
                for(var i=0;i<new_array.length;i++){
                    if(index>=7) break;
                    if(new_array[i].media_type=='tv'){
                        res_array.push({
                            id:new_array[i].id,
                            title:new_array[i].name,
                            media_type:new_array[i].media_type,
                            backdrop_path:"https://image.tmdb.org/t/p/w500"+new_array[i].backdrop_path,
                            poster_path:"https://image.tmdb.org/t/p/w500"+new_array[i].poster_path,
			   rating:new_array[i].vote_average/2,
			   date:new_array[i].first_air_date.substring(0,4)
                        });
                    }else{
                        res_array.push({
                            id:new_array[i].id,
                            title:new_array[i].title,
                            media_type:new_array[i].media_type,
                            backdrop_path:"https://image.tmdb.org/t/p/w500"+new_array[i].backdrop_path,
                            poster_path:"https://image.tmdb.org/t/p/w500"+new_array[i].poster_path,
		           rating:new_array[i].vote_average/2,
			   date:new_array[i].release_date.substring(0,4)
                        });
                    }

                    index++;

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
