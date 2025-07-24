const express=require('express')
const app=express();
const {engine}=require('express-handlebars')
const loginPage=require('./controllers/userController')
app.engine('hbs',engine({extname:'hbs',defaultLayout:false}))
app.set('view engine', 'hbs');


app.get('/',loginPage )


app.listen(8001, ()=>{
    console.log('running');
    
})