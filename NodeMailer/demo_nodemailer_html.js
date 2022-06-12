var nodemailer = require('nodemailer');
var fs = require('fs');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'vincentfor0214@gmail.com',
		pass: 'password'
	}
});
var mailOptions = {
	from: 'vincentfor0214@gmail.com',
	to: 'shehblockflood@gmail.com',
	subject: 'Send HTML Content by Node.js',
	html: ''
};
fs.readFile('demofile1.html', function(err, data) {
	if (err) {
		console.log(err);
		return;
	}
	mailOptions.html = data;
	console.log(mailOptions);
	// send
	transporter.sendMail(mailOptions, function(error, info) {
		if (error)
			console.log(error);
		else
			console.log('Email sent: %s', info.response);
	});
});


