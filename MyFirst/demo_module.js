var http = require('http');// get access to HTTP module
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': ' charset=utf-8; text/html'});
	res.write('<head><meta charset="UTF-8"/></head>');
	res.write('The date and time are currently: ' + dt.myDateTime());
	res.end();
		
}).listen(8080);
