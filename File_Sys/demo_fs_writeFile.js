var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	fs.writeFile('mynewfile3.txt', '我的文字在這阿!', {
		encoding: "utf8",
		flag: "w",
		mode: 0o666
	}, (err) =>{
		if (err)
			throw err;
		console.log('Replaced!');
	});
}).listen(8080);