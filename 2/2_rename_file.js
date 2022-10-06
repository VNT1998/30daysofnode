var fs = require('fs');

fs.rename('index.txt', 'data.txt', (err) => {
	if (err)
		throw err;
	console.log('File renamed successfully');
});

console.log("This method is Asynchronous");
									