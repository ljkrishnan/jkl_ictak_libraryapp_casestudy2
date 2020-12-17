const express = require("express");
const userbooksRouter = express.Router();
const Bookdata = require("../model/Bookdata");
function router(nav){
 
    
    userbooksRouter.get("/",function(req,res){     //for user only
        Bookdata.find()
        .then(function(books){
            res.render("booksuser",
            {
                nav,
                title:"Library",
                books
            });
        });
       
    });
   
   
    userbooksRouter.get("/:id",function(req,res){     //for user only
        const id=req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("bookuser",{
                nav,
                title:"Library",
                book
            });
        });
      
    });
   
   
    return userbooksRouter; 
}


module.exports = router;