const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const About = fs.readFileSync('./about.html')
const Services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')



const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-type','text\html');
    url = req.url;
    if(url =='/'){

        res.end(home)
    }
    else if(url =='/about'){

        res.end(About)
    }
    else if(url =='/contact'){

        res.end(contact)
    }
    else if(url =='/services'){

        res.end(Services)
    }
    else{
        res.end("<h1>404 not found</h1>")
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });