// FS function can be performed even without creating server

var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer((req, res) => {
    console.log('Server started at: ' + req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    var content = " and following this is the text appended";
    fs.appendFile('index.txt', content, (err) => {
        if (err) {
            res.json({ 'status': 'error', 'message': err.message });
        }
    });
    res.end();
}).listen(port);