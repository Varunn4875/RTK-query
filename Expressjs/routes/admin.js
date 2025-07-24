const express=require('express');
const router=express.Router();
const bp=require('body-parser');
const path=require('path')
const rootDir=require('../utils/path')
router.use(bp.urlencoded())

router.get('/add-product', (req, res, next) => {
    console.log('second middleware');

    const filePath = path.join(rootDir, 'views', 'add-product.html');
    console.log("Serving add-product.html from:", filePath);

    res.sendFile(filePath);
    console.log(req.body)

    console.log(__dirname); // Optional for debugging
});

router.post('/',(req,res,next)=>{    //Post() will help with the condition that only after the add-product form posted the page will show as response
    console.log('always middle ware');
//unless in Node.js res.setHeader(),res.write() we have seen 
//in express.js it is way more simple 
//just send the content it will understand what type is that 
//    console.log('Form data', req.body);
   res.send('<b>product submitted</b>')
   
})

module.exports=router;