const express=require('express')

const app=express();
const path=require('path')
const multer=require('multer')

app.set('views',path.join(__dirname,"views"))
app.set('view engine', "ejs")

 var storage= multer.diskStorage({
    destination : function(req,file,cb){

        //some work or logic

        cb(null,'uploads')

    },
    filename:function(req,file,cb){

        cb(null,file.originalname.replace(/\.[^/.]+$/,"") + '_' + Date.now() + path.extname(file.originalname))
     
    }
})

let maxSize=2 * 1000 * 1000

 let upload = multer({
    storage:storage,
    limits:{
        fileSize:maxSize
    },
    fileFilter: function(req,file,cb){

        let filetypes= /jpeg|jpg|png/;
        let mimetype=filetypes.test(file.mimetype)

        let extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())


        if (mimetype && extname){
            return cb(null,true);
        }
        cb("Error:File upload only supports" + filetypes )


    }
}).single('mypic')

app.get('/',(req,res)=>{
    res.render('signup')
})

app.post('/upload',(req,res,next)=>{

    //line 27

    upload(req,res, function(err){
        if(err){
            res.send(err)
        }
        else{
            res.send("successfully image uploaded")
        }
    })

})

app.listen(8080, ()=>{
    console.log("server is running")
})
