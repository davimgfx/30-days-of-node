const fs = require('fs');
const filename = '10and9.test1.txt';
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});
				