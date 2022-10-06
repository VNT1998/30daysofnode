// FS function can be performed even without creating server

var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer((req,res)=>{
    console.log('Server started at: '+req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    fs.readFile('index.txt', (err, data) => {
        if (err) {
            res.json({ 'status': 'error', 'message': err.message });
        } else {
            console.log("Operation Success");
            res.write(data);
            res.end();
        }

    })
}).listen(port);