const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	database: 'demo_db',
	user: 'postgres',
	password: 'qazxsw',
});

const text_create = 'create table if not exists users(id SERIAL, ' +
	'name varchar(255) not null,' +
	'email varchar(255) not null,' +
	'primary key(id)' +
	');';
const text_insert = 'insert into users(name, email) values($1, $2);';
const values = ['brianc', 'brian.m.carlson@gmail.com'];
const text_select = 'select * from users;';

// promise
// The result won't definitely return by the sequence of the query functions.
// It is better to use callbacks.
// create table
pool.query(text_create).then(res => console.log(res.command)).catch(e => console.error(e.stack));
// insert
pool.query(text_insert, values).then(res => console.log(res.command)).catch(e => console.error(e.stack));
// select
pool.query(text_select).then(res => console.log(res.command)).catch(e => console.error(e.stack));

setTimeout(function() { pool.end(); console.log('timeout!'); }, 3000);