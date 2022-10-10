const fs = require('fs');

function nSCallback(error, data) {
  if (error) {
    console.error('Error : ', error);
    return;
  }
  console.log(data);
}
fs.readFile('hello.txt', nSCallback);
fs.readFile('message.txt', nSCallback);	