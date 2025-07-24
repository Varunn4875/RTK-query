
const routes=require('./routes.js')
const http=require('http')
//request - req is the request from the browser
//result-res is the response from us 

console.log(routes.someText);
console.log('testing');




const server=http.createServer(routes.handler)

server.listen(3000,()=>{
    console.log('server running');
    
})
//there are many ports in our computer 
//and it wont stop listen until we turn off the computer
