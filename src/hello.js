var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.end('<h1>Hello, World!</h1>\n');
});

server.listen(8080, '127.0.0.1');

console.log('Server running');
