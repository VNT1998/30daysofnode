var fs = require('fs');
var filename = 'temp1.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');