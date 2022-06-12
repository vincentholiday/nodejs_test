var http = require('http');
var fs = require('fs');
var url = require('url');
// It sometimes can't get a complete file.
var formidable = require('formidable');

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	console.log("app: %s, baseUrl: %s, hostname: %s, ip: %s, path: %s, url: %s.", req.app, req.baseUrl, req.hostname, req.ip, req.path, req.url);
	console.log(req.url);
	console.log(q);
	if (q.pathname == '/upload_form') {
		fs.readFile('form.html', function(err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else if (q.pathname == '/file_upload') {
		var form = new formidable.IncomingForm();
		form.uploadDir = "C:\\Users\\zero_\\Desktop\\temp";
		
		form.parse(req, function(err, fields, files) {
			var oldPath = files.file_to_upload.filepath;
			console.log("old path: %s.", oldPath);

			var newPath = "C:\\Users\\zero_\\Desktop\\Nodejs Project\\FileUpload\\files\\" +
				files.file_to_upload.originalFilename;
			console.log("new path: %s.", newPath);

			fs.rename(oldPath, newPath, function(err) {
				if (err)
					throw err;
				res.write("File uploaded and moved!");
				res.end();
			});
		});

		form.parse(req, function(err, fields, files) {
			res.write("File uploaded");
			res.end();
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		return res.end("404 Not Found");
	}

}).listen(8080);