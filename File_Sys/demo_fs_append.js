var fs = require('fs');

// create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'How are you doing?', function(err){
	if(err)
		throw err;
	console.log('Saved.');
});