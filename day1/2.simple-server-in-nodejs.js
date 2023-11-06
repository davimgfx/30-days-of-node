// modulo http
var http = require('http');

// server disponivel em http://127.0.0.1:3000
var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {;
// configurar o cabeçalho da resposta
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("server Working");
  response.end('Server Working Success - Yesss');
});

server.listen(port,host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});	
							
			