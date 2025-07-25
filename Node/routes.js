const { debug } = require('console');
const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Form Details</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log('chunk:', chunk);
      body.push(chunk);
    }); 

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('varun.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  // Default fallback for other URLs
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Not Found</title></head>');
  res.write('<body><h1>Hello from Node.js server</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;


//if too many exports

// module.exports={
//   handler: requestHandler,
//   someText:'Printing some text'
// }

// exports.handler=requestHandler;
// exports.someText='printing some text'

module.exports.handler=requestHandler;
module.exports.someText='printing some text'