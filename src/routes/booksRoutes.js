const express =require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata')

function router(nav){
    
    // var books=[{
    //     title:'The Alchemist',
    //     author:'Panlo Corlho',
    //     genre:'Novel',
    //     img:"TheAlchemist.jpg",
    //     des:"The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. ... An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there."
    // },
    // {
    //     title:'Wings Of Fire',
    //     author:'APJ Abdul Kalam',
    //     genre:'Autobiography',
    //     img:"wings.jpg",
    //     des:"The Wings of Fire is an autobiography of former Indian President APJ Abdul Kalam. The book covers his life before he became the President of India and commanded the armed forces. Renowned scientist and former Indian President APJ Abdul Kalam from 2002 to 2007 is well known across India and abroad as well"
    // },   
    // {
    //     title:'Pathumayude Aadu',
    //     author:'Basheer',
    //     genre:'Drama',
    //     img:"goat.jpg",
    //     des:"Patthummayude Aadu (Patthumma's Goat) is a fictionalised account of Basheer's family life - only thing is, as with most of his stories, we cannot say what is truth and what is fiction. ... Basheer describes with his characteristic wry humour how it once ate his lunch, along with the banana leaf it was served on!"
    // }
    // ]


    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
           
                nav,
                title:'Library',
                books
    
            });
        });        
    });

    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;

        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
         
                nav,
                title:'Library',
                book
                
            }); 
        });
    });
    return booksRouter;


}

// module.exports=booksRouter;
module.exports=router;
