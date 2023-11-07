//Writing a File Asynchronously using nodejs, if the file does not exist, the node create
const fs =  require('fs');

const writeContent= "this is the content in the file from exercise 11.";

const appendContent = " This is the appendContent"

fs.writeFile('11.message.txt', writeContent , (err) => {
	if (err) throw err;
	console.log('It\'s saved!');

    fs.appendFile('11.message.txt', appendContent, (err) => { 
        if (err) throw err;
	    console.log('It\'s saved!');
    })
});
									
	