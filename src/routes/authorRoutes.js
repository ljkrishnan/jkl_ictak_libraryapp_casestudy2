const express = require("express");
const authorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav){
    // var authors = [
    //     {
    //         author: "Joseph Barbera",
    //         genre: "Cartoon",
    //         img: "JosephBarbera.jpg",
    //         title1: "Tom and Jerry",
    //         title2: "My Life in Toons"
    //     },
    //     {
    //         author: "J.K Rowling",
    //         genre: "Fantasy",
    //         img: "JKrowling.jpg",
    //         title1: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
    //         title2: "Harry Potter and the Chamber of Secrets (Harry Potter, #2)"
    //     },
    //     {
    //         author: "Basheer",
    //         genre: "Drama",
    //         img: "Basheer.jpg",
    //         title1: "Paathumayude Aadu",
    //         title2: "Balyakalasakhi"
    //     }
    // ]
    
    authorRouter.get("/",function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
        {
            nav,
            title:"Authors",
            authors
        });
        });
        
    });
    
    authorRouter.get("/:id",function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("author",{
                nav,
                title:"Author",
                author
            });
        });
       
    });
    return authorRouter; 
}



module.exports = router;