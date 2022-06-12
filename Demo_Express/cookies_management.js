let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

//setup express app
let app = express();

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// handle static files, the word 'public' doesn't need to be represented in the address.
app.use(express.static('form'));

//basic route for homepage
app.get('/', (req, res) => {
	res.send('welcome to express app');
});


// Route for adding cookie
app.post('/setuser', (req, res) => {
	console.log(req);
	// JSON object to be added to cookie
	let user = { name: null, age: null };
	user.name = req.body.name;
	user.age = req.body.age;

	res.cookie('uesrData', user);
	//Expires after 400000 ms from the time it is set.
	// res.cookie('uesrData', user, { expire: 40000 + Date().now() });
	console.log("Got a Post request(ip: %s, url: %s)", req.ip, req.url);
	res.send('user data(' + JSON.stringify(user) + ') set to cookie');
});

app.get('/getuser', (req, res) => {
	res.set('Content-Type', 'text/plain');
	// shows all the cookies
	res.end(JSON.stringify(req.cookies));
});

app.get('/logout', function(req, res) {
	res.clearCookie('uesrData');
	console.log("Cookie cleared");
	res.send('user logout successfully');
});

//server listens to port 8081
app.listen(8081, (err) => {
	if (err)
		throw err;
	console.log('listening on port 8081');
});