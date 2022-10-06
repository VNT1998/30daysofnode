// FS function can be performed even without creating server

var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer((req, res) => {
    console.log('Server started at localhost:' + port);
    res.writeHead(200, { "Content-Type": "text/plain" });
    var content = "this is the another content added in the file in syncronous mode.";
    data = fs.appendFileSync('index.txt',content);
    console.log("Operation Success");
    res.end();
}).listen(port);