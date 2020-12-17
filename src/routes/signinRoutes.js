const express = require("express");
const { buildSanitizeFunction } = require("express-validator");
const signinRouter = express.Router();
const Userdata = require("../model/Userdata");


function router(nav){
    
    signinRouter.get("/",function(req,res){    //Sign in Page Router
        res.render("signin",
        {
            nav,
            title:"Sign In",
            email:"email"            
        });
    });
 
    signinRouter.get("/signup",function(req,res){     //Sign Up Page Router
        res.render("signup",
        {
            nav,
            title:"Sign Up",
            
        });
    });

    signinRouter.post("/saveuser",function(req,res){        //Save User to collection - userdata in database
        var item = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobileno: req.body.mobileno,
            email: req.body.email,
            password: req.body.password
        }
        var user = Userdata(item);
        user.save();  //Saving to database
        // res.redirect("/signin");
        res.render("signupsuccess",          //Sign Up Success Message
        {
            nav,
            title:"Sign In",
            email:"email"            
        });

    });
    signinRouter.post("/validuser",function(req,res){     //validation with database
        // res.send("You are signed in")
        const enteredemail=req.body.email;
        const enteredpassword=req.body.password;
        // console.log(enteredemail);
        // console.log(enteredpassword);
        Userdata.findOne({email: enteredemail})
        .then(function(user){
           const password=user.password;
           if(enteredemail=="admin@gmail.com" & enteredpassword=="Admin1234"){   //new
            res.redirect("/account");   
           }          
           else if(password==enteredpassword){
            // res.redirect("/account/accountuser");
            var fname = user.firstname;
            console.log(fname);
            res.render("accountuser1",                            //Displaying username
            {
                nav,
                title:"Library",
                fname
            });
           }
           else{
               const display = "Wrong password";
               const emaildisplay = "";
               console.log(display);
            //    res.redirect("/signin");
            res.render("signin1",
            {
                nav,
                title:"Sign In",
                display,
                emaildisplay

            });
           }
        })
        .catch(function(){
            const emaildisplay = "Email ID not Registered";
            const display = "";
            res.render("signin1",
            {
                nav,
                title:"Sign In",
                display,
                emaildisplay
            });
        })
      
    });

    return signinRouter; 
}

module.exports = router;

 