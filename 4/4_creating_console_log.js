var fs = require('fs');
const {Console}=require('console');

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

const print= new Console(output, errOutput);

const roll=51651;
print.log('This is user id %d',roll);