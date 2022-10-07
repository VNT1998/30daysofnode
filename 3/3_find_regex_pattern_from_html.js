var fs=require('fs');
var str=fs.readFileSync('data.html').toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
var myArray=str.match(pattern);
console.log(myArray);