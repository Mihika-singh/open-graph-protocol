//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const port=process.env.PORT || 4000;
const ogp = require('ogp-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
    const url="http://ogp.me/";
    console.log("URL:"+url);
    ogp(url).then(function(data) {
        console.log(JSON.stringify(data, null, "    "));
    }).catch(function(error) {
        console.error(error);
    });
})
app.listen(port,function(){
    console.log("server at 3000");
})          