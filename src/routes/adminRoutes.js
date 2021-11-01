const express=require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');

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
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:'Library'
        });
       

        // adminRouter.get('/',function(req,res){
        //     res.render('addauthor',{
        //         nav,
        //         title:'Library'
        //     });


    adminRouter.post('/add',function(req,res){

        var upload=multer({storage:storage }).single('image');
        upload(req,res,function(err){
            if(err)
              console.log(err);
            else{
                var item={
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre,
                    lang:req.body.lang,
                    image:req.file.filename
                }
              

            }
            var book=Bookdata(item);
                book.save();
                res.redirect('/books');

        });
       
    });
    
 });



    return adminRouter;

}

module.exports=router;