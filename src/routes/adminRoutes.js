const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const Authordata = require("../model/Authordata");

function router(nav){

    
    adminRouter.get("/",function(req,res){        //Add Book Page Router
        res.render("addbook",
        {
            nav,
            title:"Add Book"
            
        });
    });
    adminRouter.post("/add",function(req,res){        //Add Book to collection - bookdata in database
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
        }
        var book = Bookdata(item);
        book.save();  //Saving to database
        res.redirect("/books");
    });
    adminRouter.get("/addauthor",function(req,res){           //Add Author Page Router
        res.render("addauthor",
        {
            nav,
            title:"Add Author"
            
        });
    });
    adminRouter.post("/saveauthor",function(req,res){         //Save Author to collection - authordata in database  
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            image: req.body.image
        }
        var author = Authordata(item);
        author.save();  //Saving to database
        res.redirect("/authors");
    });
    
    adminRouter.get("/:id",function(req,res){                //Delete a single book from collection - bookdata in database
        const id=req.params.id;
        Bookdata.deleteOne({_id: id})
        .then(function(){
            res.redirect("/books");
        });
        
    });
   
     
    return adminRouter; 
}

module.exports = router;