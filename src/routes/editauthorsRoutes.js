const express =require('express');
const editauthorsRouter=express.Router();

// const authorsRouter=express.Router();
const authordata=require('../model/authordata')

function router(nav){
    
 

    editauthorsRouter.get('/',function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("editauthors",{
            
                nav,
                title:'Library',
                authors
    
            });

        });
       
    });

    

  

    editauthorsRouter.get('/:id',function(req,res){
        const id=req.params.id;

        authordata.findOne({_id:id})
        .then(function(author){

            res.render("editauthors",{
              
                nav,
                title:'Library',
                author
                
            });

        });
     
    });
    return editauthorsRouter;


}

module.exports=router;
