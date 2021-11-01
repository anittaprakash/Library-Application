// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/Library');

// Schema Definition
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    authorname: String,
    occupation: String,
    language: String,
    image: String,
    
});

// Model Creation
var authordata = mongoose.model('authordata', authorSchema);

module.exports = authordata;