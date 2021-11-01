const express =require('express');
const app=express();

const port=process.env.PORT || 8080;

const nav=[
    {
        link:'/signup',name:'signup'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add author'
    },
    
    {
        link:'/',name:'Logout'
    }
    
];

app.use(express.urlencoded({extended:true}));



app.use(express.static('./public'));


app.set('view engine','ejs');
app.set('views','./src/view');

const booksRouter=require('./src/routes/booksRoutes')(nav);
app.use('/books',booksRouter);

const authorsRouter=require('./src/routes/authorsRoutes')(nav);
app.use('/authors',authorsRouter);

const editauthorRouter=require('./src/routes/editauthorsRoutes')(nav);
app.use('/editauthor',editauthorRouter);


const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use('/admin',adminRouter);

const signupRouter=require('./src/routes/signupRoutes')(nav);
app.use('/signup',signupRouter);

const loginRouter=require('./src/routes/loginRoutes')(nav);
app.use('/login',loginRouter);

const addauthorsRouter=require('./src/routes/addauthorsRoutes')(nav);
app.use('/addauthor',addauthorsRouter);



app.get('/',function(req,res){
   
    res.render("index",
    {
       
        nav,
        title:'Library'    
    });

});


// app.get('/editauthor',function(req,res){
   
//     res.render("editauthor",
//     {
       
//         nav,
//         title:'Library'    
//     });

// });





app.listen(port,()=>{console.log("server ready at"+port)});
