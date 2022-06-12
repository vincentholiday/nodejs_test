const { Client } = require('pg')
const client = new Client({
	host: 'localhost',
	port: 5432,
	database: 'demo_db',
	user:'postgres',
	password: 'qazxsw',
})
client.connect()
/*
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
	console.log(err ? err.stack : res.rows[0].message) // Hello World!
})
*/
client.query('select * from account', (err, res) => {
	console.log(err ? err.stack : res.rows)
	client.end()
})