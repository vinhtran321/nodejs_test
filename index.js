const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log('\nRequest Received');
   if (req.url === '/')
   {
    console.log('Request main html');

        fs.readFile('html//demo.html', (err, data) =>  {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else
    {

        console.log('Unhandled request: Command not implemented');
        console.log('test');
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
