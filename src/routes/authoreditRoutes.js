const express = require("express");
const authoreditRouter = express.Router();

function router(nav){

    
    authoreditRouter.get("/:id",function(req,res){
        const id=req.params.id;
        res.render("editauthor",
        {
            id,
            nav,
            title:"Edit Author"
            
        });
    });

   
     
    return authoreditRouter; 
}

module.exports = router;