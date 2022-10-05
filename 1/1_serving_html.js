var http = require('http');
var fs = require('fs');

var host = '127.0.0.1'
var port = 3000;

http.createServer((req, res) => {
    console.log('server is listening on ' + host + ':' + port);
    // Define MIME type
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('index.html', (err, data) => {
        if (err)
            throw err;
        console.log("Operation Success");
        res.end(data);
    })
}).listen(port);