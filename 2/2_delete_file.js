var fs = require('fs');
var filename = 'temp.txt';
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});