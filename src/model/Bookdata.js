const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    lang:String,
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);
 module.exports=Bookdata;