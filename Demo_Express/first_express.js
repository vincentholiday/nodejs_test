var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// handle static files
app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get("/", function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s) for the homepage", req.ip, req.url);
	res.send('Hello Get at the homepage');
});

// This responds a POST request for the homepage
app.post("/", function(req, res) {
	console.log("Got a POST request(ip: %s, url: %s) for the homepage", req.ip, req.url);
	res.send('Hello Post at the homepage');
});

app.get('/index.html', function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.sendFile(__dirname + '/index.html');
});

app.get('/index2.html', function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.sendFile(__dirname + '/index2.html');
});

app.get('/process_get_form', function(req, res) {
	// Prepare output in JSON format
	responseJson = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	}
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.end(JSON.stringify(responseJson));
});

app.post('/process_post_form', function(req, res) {
	// Prepare output in JSON format
	responseJson = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	}
	console.log("Got a Post request(ip: %s, url: %s)", req.ip, req.url);
	res.end(JSON.stringify(responseJson));
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_uesr', function(req, res) {
	console.log('Get a DELETE request for /del_user');
	res.send('Hello DELETE');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
})

// [/*] can't be placed at the top of the sequence, otherwise it will catch every url 
app.get("/*", function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.send('Hello Get at ' + req.url);
});


var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
	console.log('__dirname: ' + __dirname);
});

