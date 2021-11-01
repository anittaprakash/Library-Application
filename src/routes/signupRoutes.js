
const express=require('express');
const signupRouter=express.Router();
 const signupdata=require('../model/signupdata');

function router(nav){

    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        });



    signupRouter.post('/add',function(req,res){
       
        var item={
            username:req.body.username,
            phoneno:req.body.phoneno,
            email:req.body.email,
            password:req.body.password,
            cfmpassword:req.body.cfmpassword
        }

       
        var sign=signupdata(item);
        sign.save();
        res.redirect('/login')
    
    });
});
    return signupRouter;

}

module.exports=router;