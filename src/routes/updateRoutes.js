const express = require("express");
const updateRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav){

    
    updateRouter.post("/:id",function(req,res){
        const id=req.params.id;
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
        }
        Bookdata.updateOne({_id: id},item,function(){
            
            res.redirect("/books");  
        });
        
    });
    
    return updateRouter; 
}

module.exports = router;