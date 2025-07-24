const express=require('express')
const path=require('path')
const router=express.Router();
const rootDir=require('../utils/path')

router.get('/',(req,res,next)=>{
    // res.send('<h1>Welcome Page</h1>')
    //from html page
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    const filePath=path.join(rootDir,'views','shop.html')
    res.sendFile(filePath)
    //   console.log(__dirname,'../')
})
 module.exports=router;