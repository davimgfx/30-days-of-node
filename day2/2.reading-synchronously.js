var fs = require('fs');
var filename = '2and1.message.txt'; //Name of the file to be read
// Look the name of the method readFileSYNC
var content = fs.readFileSync(filename);
console.log('Content : ' + content);