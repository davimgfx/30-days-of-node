const fs = require('fs');
const filename = '10and9.test2.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');