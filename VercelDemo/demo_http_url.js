var http = require('http');
var url = require('url');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<meta charset='utf-8'></meta>");
	var txt = 'This is a Vercel Demo with url - ' + req.url;
	res.end(txt);
}).listen(8080);