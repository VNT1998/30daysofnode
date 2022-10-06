var fs =  require('fs');

fs.renameSync('newData.txt', 'index.txt');
console.log('File renamed successfully');

console.log("This method is Synchronous");