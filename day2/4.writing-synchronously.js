const fs = require('fs');

const content = "this is the content in the file from exercise 4";

fs.writeFileSync('4and3.message.txt', content);
console.log("File Written Successfully");