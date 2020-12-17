const express = require("express");
const authordeleteRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav){

    authordeleteRouter.get("/:id",function(req,res){                //Delete a single book from collection - bookdata in database
        const id=req.params.id;
        Authordata.deleteOne({_id: id})
        .then(function(){
            res.redirect("/authors");
        });
        
    });
   
     
    return authordeleteRouter; 
}

module.exports = router;