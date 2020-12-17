const express = require("express");
const editRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const Authordata = require("../model/Authordata");

function router(nav){

    
    editRouter.get("/:id",function(req,res){
        const id=req.params.id;
        res.render("editbook",
        {
            id,
            nav,
            title:"Edit Book"
            
        });
    });

   
     
    return editRouter; 
}

module.exports = router;