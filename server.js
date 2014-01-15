"use strict";
var http = require('http');

http.createServer(function (request, response) {
	
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
	
	console.log(request.url);
}).listen(8080);

console.log('Serveur démarré sur http://127.0.0.1:8080/');