var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
/*
 Multer is a node.js middleware for handling multipart/form-data,
 which is primarily used for uploading files.
 */
const multer = require("multer");
// specifies the directory where Multer will save the encoded files.
const upload = multer({ dest: "./tmp_upload/" });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/index.html', function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.sendFile(__dirname + "/upload_form.html");
});

app.post('/file_upload', upload.single("input_file"), function(req, res) {
	console.log("Got a POST request(ip: %s, url: %s)", req.ip, req.url);
	// req.file is by the name of your input file in the form above, here 'input_file'
	var file = req.file;
	console.log(file);
	var file_dest_path = __dirname + '/download/' + file. originalname;

	console.log('file_dest_path: ' + file_dest_path);

	fs.readFile(file.path, function(err, data) {
		fs.writeFile(file_dest_path, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				let response = {
					message: 'File uploaded successfully',
					filename: file.originalname
				}
				console.log(response);
				res.end(JSON.stringify(response));
			}

		});

	});
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
})