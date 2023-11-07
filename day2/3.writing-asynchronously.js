//Writing a File Asynchronously using nodejs, if the file does not exist, the node create
const fs =  require('fs');

const content= "this is the content in the file from exercise 3";

fs.writeFile('4and3.message.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});
									
	