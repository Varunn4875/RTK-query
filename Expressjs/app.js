const express=require('express')
const app= express();
const http=require('http')
const bp=require('body-parser');
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const path=require('path');
const rootDir=require('../Expressjs/utils/path')

//for integrating statis files
// app.use(express.static(path.join(__dirname,'public')))


const { fileURLToPath, pathToFileURL } = require('url');
//const express  => is a function 
//so must call like function express  ()

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    // const filePath = path.join(__dirname, 'views', '404.html');
    // console.log("Sending 404 file from:", filePath);
    // res.status(404).sendFile(filePath);
    const filepath=path.join(rootDir,'views','404.html')
    res.status(404).sendFile(filepath)
});

 




//use function is a middleware

app.use(bodyParser.urlencoded())



app.listen(3000);