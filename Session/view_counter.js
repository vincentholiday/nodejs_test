var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
let cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

/**
 Please note that secure: true is a recommended option. 
 However, it requires an https-enabled website, i.e.,
 HTTPS is necessary for secure cookies. 
 If secure is set, and you access your site over HTTP, 
 the cookie will not be set. 
 If you have your node.js behind a proxy and are using secure: true, 
 you need to set "trust proxy" in express:
 */
app.use(session({
	secret: 'keyborad cat', //用來簽章 sessionID 的cookie, 可以是一secret字串或是多個secret組成的一個陣列。如果是陣列, 只有第一個元素會被簽到 sessionID cookie裡。而在驗證請求中的簽名時，才會考慮所有元素。
	resave: false, // 強制將session 存回 session store, 即使它沒有被修改。預設是 true
	saveUninitialized: true,// 強制將未初始化的session存回 session store，未初始化的意思是它是新的而且未被修改。
	cookie: { secure: false }// if true then it requires an https-enabled website.It only supports http by default.
}));

app.use(function(req, res, next) {
	console.log(req.cookies);
	next();
});

app.use(function(req, res, next) {
	if (!req.session.views) {
		req.session.views = {};
	}

	// get the url pathname
	var pathname = parseurl(req).pathname;
	console.log('pathname: ' + pathname);

	// count the views
	req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
	next();
});

app.get('/foo', function(req, res) {
	res.send('you viewed this page ' + req.session.views['/foo'] + ' times');
});


app.get('/bar', function(req, res) {
	res.send('you viewed this page ' + req.session.views['/bar'] + ' times');
});

app.listen(8081, function(err) {
	if (err)
		throw err;
	console.log('__dirname: ' + __dirname);
	console.log('listening on port 8081');
});