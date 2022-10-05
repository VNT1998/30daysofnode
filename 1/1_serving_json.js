var http = require('http');

var host = '127.0.0.1'
var port = 3000;

http.createServer((req, res) => {
    console.log('server is listening on ' + host + ':' + port);
	// Define MIME type
    res.writeHead(200, { "Content-Type": "application/json" });
	// Define JSON to be served
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
    console.log('Server Running');
	res.end(JSON.stringify(json_response)); 
}).listen(port);