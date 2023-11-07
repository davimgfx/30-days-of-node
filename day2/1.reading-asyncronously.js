//Reading a File Asynchronously using nodejs
const { readFile } = require('fs');

readFile('2and1.message.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});
									
				