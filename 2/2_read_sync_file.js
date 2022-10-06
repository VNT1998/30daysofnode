// FS function can be performed even without creating server

var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer((req, res) => {
    console.log('Server started at localhost:' + port);
    res.writeHead(200, { "Content-Type": "text/plain" });
    data = fs.readFileSync('index.txt');
    console.log("Operation Success");
    res.write(data + 'Hello');
    res.end();
}).listen(port);