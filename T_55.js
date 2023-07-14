// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Variables Custom Properties</title>
      <style>
          :root{
               --primary-color: blue;
               --danger-color: red;
               --maxw:330px;
              }        
          .box{
              
             
              width: var(--maxw);
              height: 120px;
              background-color: var(--primary-color);
              border: 2px solid red;
              
              box-shadow:  3px 3px var(--primary-color);
              margin: 2px 9px;
          }
          .container{
              max-width: var(--maxw);
              margin: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: var(--danger-color);
  
          }
  
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});