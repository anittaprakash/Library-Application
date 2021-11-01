const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

const Schema=mongoose.Schema;

//create signupschema
const signupschema=new Schema({
    username:String,
    phoneno:String,
    email:String,
    password:String,
    cfmpassword:String

});

//create signup model
var signupdata=mongoose.model('signupdata',signupschema);

//Export signupdata
module.exports=signupdata;