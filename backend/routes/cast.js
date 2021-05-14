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
    var category = arg.category;
    const url = "https://api.themoviedb.org/3/"+category+"/"+id+"/credits"+api_key+"&language=en-US&page=1";
    axios.get(url)
        .then(response=>{
            let result = {},
                res_array=[];
            index = 0;
            new_array = []=response.data.cast;
            for(var i=0;i<new_array.length;i++){
                if(new_array[i].hasOwnProperty('profile_path')&&new_array[i].profile_path!=null){
                    res_array.push({
                        id:new_array[i].id,
                        name:new_array[i].name,
                        character:new_array[i].character,
                        profile_path:'https://image.tmdb.org/t/p/w500'+new_array[i].profile_path
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
