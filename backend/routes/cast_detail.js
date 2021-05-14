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
    const url = "https://api.themoviedb.org/3/person/"+id+api_key+"&language=en-US&page=1";
    axios.get(url)
        .then(response=>{
            new_obj = {}=response.data;
            result = {
                birthday:new_obj.birthday,
                gender:new_obj.gender,
                name:new_obj.name,
                homepage:new_obj.homepage,
                also_known_as:new_obj.also_known_as,
                known_for_department:new_obj.known_for_department,
                biography:new_obj.biography,
                place_of_birth:new_obj.place_of_birth
            }
            res.json(result);
        })
        .catch(error=>{
            console.log(error);
        });
})
module.exports = router;
