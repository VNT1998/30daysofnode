var http = require('http');
var fs = require('fs');

var host = '127.0.0.1'
var port = 3000;

http.createServer((req, res) => {
    console.log('server is listening on ' + host + ':' + port);
    // Define MIME type
    res.writeHead(200, { "Content-Type": "application/pdf" });
    fs.readFile('index.pdf', (err, data) => {
        if (err) {
            // Define error JSON
            res.json({ 'status': 'error', 'message': err.message });
        } else {
            // Data of PDF will be written to the response
            console.log("Operation Success");
            res.write(data);
            res.end();
        }

    })
}).listen(port);