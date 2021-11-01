const express =require('express');
const authorsRouter=express.Router();
const authordata=require('../model/authordata')

function router(nav){
    
    // var authors=[{
    //     title:'Sugathakumari',
    //     author:'Poet,Environmentalist,Social activist',
    //     lang:'	Malayalam',
    //     img:"sugathakumari.jpg",
    //     des:"Sugathakumari (22 January 1934 – 23 December 2020) was an Indian poet and activist, who was at the forefront of environmental and feminist movements in Kerala, South India. Her parents were the poet and freedom fighter Bodheswaran and V. K. Karthiyayini Amma, a Sanskrit scholar. She was the founder secretary of the Prakrithi Samrakshana Samithi, an organisation for the protection of nature, and of Abhaya, a home for destitute women and a day-care centre for the mentally ill. She chaired the Kerala State Women's Commission.[1] She played a prominent role in the Save Silent Valley protest."
    // },
    // {
    //     title:'A. P. J. Abdul Kalam',
    //     author:'Aerospace Scientist,Author',
    //     lang:'English',
    //     img:"apj.jpg",
    //     des:"Avul Pakir Jainulabdeen Abdul Kalam (/ˈəbdəl kəˈlɑːm/ (About this soundlisten); 15 October 1931 – 27 July 2015) was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts"
    // },

    // {
    //     title:'O. N. V. Kurup',
    //     author:'Poet, lyricist, professor',
    //     lang:'Malayalam',
    //     img:"onv.jpg",
    //     des:"Ottaplakkal Neelakandan Velu Kurup (known as O. N. V. Kurup; 27 May 1931 – 13 February 2016) was a Malayalam poet and lyricist from Kerala, India, who won the Jnanpith Award, the highest literary award in India for the year 2007. He received the awards Padma Shri in 1998 and Padma Vibhushan in 2011, the fourth and second highest civilian honours from the Government of India."
    // }
    
    // ]


    authorsRouter.get('/',function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("authors",{
                // nav:[{link:'/books',name:'books'},{link:'/authors',name:'Authors'}],
                nav,
                title:'Library',
                authors
    
            });

        });
       
    });

    ///doubt

    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;

        authordata.findOne({_id:id})
        .then(function(author){

            res.render('author',{
                // nav:[{link:'/books',name:'books'},{link:'/authors',name:'Authors'}],
                nav,
                title:'Library',
                author
                
            });

        });
     
    });
    return authorsRouter;


}


// module.exports=booksRouter;
module.exports=router;
