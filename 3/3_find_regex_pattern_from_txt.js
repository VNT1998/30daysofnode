var fs=require('fs');
var str=fs.readFileSync('data.txt').toString();
var pattern = /man/gim;
var myArray=str.match(pattern);
console.log(myArray);