const express = require("express");
const authorupdateRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav){

    
    authorupdateRouter.post("/:id",function(req,res){
        const id=req.params.id;
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            image: req.body.image,
        }
        Authordata.updateOne({_id: id},item,function(){
            
            res.redirect("/authors");  
        });
        
    });
    
    return authorupdateRouter; 
}

module.exports = router;