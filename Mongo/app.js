const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const exhbs=require('express-handlebars')
const dbo=require('./db')
const ObjectID=dbo.ObjectID

app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:"main",extname:"hbs"}))
app.set('view engine','hbs')
app.set('views','views')
//making bodyparser as middleware
app.use(bodyparser.urlencoded({extended:true}))

app.get('/', async (req,res)=>{

    let database= await dbo.getDatebase()
    const collection=database.collection('books');
    const cursor=collection.find({})
    let books= await cursor.toArray();


    let message='';  
    let edit_id, edit_book;
    if (req.query.edit_id) {
        edit_id=req.query.edit_id;
       edit_book= await collection.findOne({_id: new ObjectID(edit_id)})
        
    }
    if (req.query.delete_id){
       await  collection.deleteOne({_id: new ObjectID(req.query.delete_id)})
       return res.redirect('/?status=3')
    }
     
   
    switch ( req.query.status) {
        case '1':
            message= 'Inserted successfully'
            
            break;
        case '2':
            message= 'Updated successfully'
            break;
        case '3':
            message='Deleted successfully'
    
        default:
            break;
    }

    res.render('main',{message,books,edit_id,edit_book})

})

app.post('/store_book', async(req,res)=>{
    let database=await dbo.getDatebase()
    const collection=database.collection('books')
    let book = {title: req.body.title,author:req.body.author}
    await collection.insertOne(book)
    return res.redirect('/?status=1')   //status=1 is insert was done

})
app.post('/update_book/:edit_id', async(req,res)=>{
    let database=await dbo.getDatebase()
    const collection=database.collection('books')
    let book = {title: req.body.title,author:req.body.author}
    let edit_id=req.params.edit_id;

    await collection.updateOne({_id:new ObjectID(edit_id)},{$set:book})
    return res.redirect('/?status=2')   //status=1 is insert was done

})



app.listen(8000,()=>{
    console.log('listening')
})