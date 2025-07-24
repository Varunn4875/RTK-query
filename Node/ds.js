const fs=require('fs')
const requestHandler=(res,req)=>{

    const url=req.url;
    const method = req.method;
    if (url ==='/'){
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Enter Form Details</title></html>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
    res.write("</html>")
     return res.end();
    }

    if(url==='/message' && method=='POST'){

        const body = [];
        req.on('data',(chunk)=>{
        //    console.log('chunk',chunk);
           body.push(chunk)
           console.log(chunk);
           

           
        })  //by this on(data) we can identify that node sent a data 

       return  req.on('end',()=>{
//if we dont need the codes beloq if block just put "return" before the req.on

            const parsedBody=Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message=parsedBody.split('=')
            // writeFileSync('varun.txt',message[1])   //=> it alone a synchronus
            writeFile('varun.txt',message[1], (err)=>{
                console.log('file write completed');
                res.setHeader('Location','/')
                res.statusCode=302;
             return res.end()
             })  //=> it is asynchronus function
           
            
        }) 
       
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Enter Form Details</title></html>')
    res.write('<body><h1>Hello from Node.js server</h1></body>')
    res.write("</html>")
    res.end()
}
module.exports= requestHandler;

// console.log(req.headers)
    //req.method
    //req.headers
   


    //after end write() function will make an error
