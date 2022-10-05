var http = require('http');
var fs = require('fs');

var host = '127.0.0.1'
var port = 3000;

http.createServer((req, res) => {
    console.log('server is listening on ' + host + ':' + port);
    // Define MIME type
    res.writeHead(200, { "Content-Type": "audio/mp3" });
    // Using FS exists
    fs.exists('index.mp3', (exists) => {
        if (exists) {
            // Create Read Stream
            var rstream = fs.createReadStream('index.mp3');
            rstream.pipe(res);
        } else {
            res.end('Its a 404');
        }

    })
}).listen(port);