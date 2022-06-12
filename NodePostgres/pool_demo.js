const { Pool, Client } = require('pg');

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	database: 'demo_db',
	user: 'postgres',
	password: 'qazxsw',
})

pool.query('select now()', (err, res) => {
	console.log(err, res)
	pool.end()
})

const client = new Client({
	host: 'localhost',
	port: 5432,
	database: 'demo_db',
	user: 'postgres',
	password: 'qazxsw',
})
client.connect()

client.query('select now()', (err, res) => {
	console.log(err, res)
	client.end()
})