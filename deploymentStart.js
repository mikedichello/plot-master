// Dependencies
const express = require('express');
const mongoose = require('./backEndSrc/db/connection');
const app = express();
const db = mongoose.connection;

//ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000;
const apiKey = process.env.apiKey;

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static('public'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

//ROUTES
const plotsController = require('./backEndSrc/controllers/plots.js');
app.use('/plots', plotsController);

app.get('*', (req, res) => {
	res.status(404).json('Sorry, page not found');
});

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
