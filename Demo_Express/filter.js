var express = require('express');
var app = express();

// it is similar to the Servlet Filter.
app.use(function(req, res, next) {
	console.log('Time: %d', Date.now());
	next();
});

app.use('/abc*', function(req, res, next) {
	console.log('/abc* Time: %d', Date.now());
	next();
});

app.get('/*', function(req, res) {
	console.log("Got a Get request(ip: %s, url: %s)", req.ip, req.url);
	res.send('welcome to express app');
});

//server listens to port 8081
app.listen(8081, (err) => {
	if (err)
		throw err;
	console.log('listening on port 8081');
});