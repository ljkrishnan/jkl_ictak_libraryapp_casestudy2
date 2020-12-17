const express = require("express");

// Initializing express function
const app = new express();
// Code for automatic port selection for Heroku or use port 2000
const port = process.env.PORT || 2000;

const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    }
];
const navHome = [
    {
        link:"/signin",name:"Sign In"
    },
    {
        link:"/signin/signup",name:"Sign Up"
    }
];
const navBk = [
    {
        link:"/admin",name:"Add Book"
    },
    {
        link:"/authors",name:"Authors"
    }
];
const navAuth = [
    {
        link:"/admin/addauthor",name:"Add Author"
    },
    {
        link:"/books",name:"Books"
    }
];
const navUser = [
    {
        link:"/userbooks",name:"Books"
    },
    {
        link:"/userauthors",name:"Authors"
    }
];


const booksRouter = require("./src/routes/bookRoutes")(navBk);    //navBk
const signinRouter = require("./src/routes/signinRoutes")(nav);
const authorRouter = require("./src/routes/authorRoutes")(navAuth);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const editRouter = require("./src/routes/editRoutes")(nav);
const updateRouter = require("./src/routes/updateRoutes")(nav);
const userbooksRouter = require("./src/routes/userbookRoutes")(navUser);
const userauthorRouter = require("./src/routes/userauthorRoutes")(navUser);
const authordeleteRouter = require("./src/routes/authordeleteRoutes")(nav);
const authoreditRouter = require("./src/routes/authoreditRoutes")(nav);
const authorupdateRouter = require("./src/routes/authorupdateRoutes")(nav);
 

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/signin",signinRouter);
app.use("/authors",authorRouter);
app.use("/admin",adminRouter);
app.use("/edit",editRouter);
app.use("/update",updateRouter);
app.use("/userbooks",userbooksRouter);
app.use("/userauthors",userauthorRouter);
app.use("/deleteauthor",authordeleteRouter);
app.use("/editauthor",authoreditRouter);
app.use("/updateauthor",authorupdateRouter);

app.get("/",function(req,res){
    res.render("index",
    {
        navHome,
        title:"Library App"
    });
});
app.get("/account",function(req,res){
    res.render("account",
    {
        nav,
        title:"Library"
    });
});
app.get("/account/accountuser",function(req,res){
    res.render("accountuser",
    {
        nav,
        title:"Library"
    });
});

// Listen on a port
app.listen(port,()=>{console.log("Server Ready at" + port)});
