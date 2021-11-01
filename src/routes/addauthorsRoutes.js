const express=require('express');
const addauthorsRouter=express.Router();
const authordata=require('../model/authordata');

const multer=require('multer');


//image upload
var storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./public/images');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});


function router(nav){
    addauthorsRouter.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        });
       

      

    addauthorsRouter.post('/add',function(req,res){

        var upload=multer({storage:storage }).single('image');
        upload(req,res,function(err){
            if(err)
              console.log(err);
            else{
                var item={
                    authorname:req.body.authorname,
                    occupation:req.body.occupation,
                    language:req.body.language, 
                    image:req.file.filename
                }
              

            }
            var author=authordata(item);
                author.save();
                res.redirect('/authors');

        });
       
    });
    
 });



    return addauthorsRouter;

}

module.exports=router;