// Accessing Mongoose package
const mongoose = require("mongoose");

// Database connection
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.3fjqw.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority"); 
const Schema = mongoose.Schema;

// Schema definition
const AuthorSchema = new Schema({
    author: String,
    title: String,
    genre: String,
    image: String 
});

// Model creation
var Authordata = mongoose.model("authordata",AuthorSchema);

// Exporting Model 
module.exports = Authordata;