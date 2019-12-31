//DEPENDENCIES
const express = require('express');
const mongoose = require('./db/connection.js');
const app = express();
const db = mongoose.connection;

//ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000;
const apiKey = process.env.apiKey;

//ERROR/DISCONNECTION
db.on('error', err => console.log(err.message + 'is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// This is correct, we should look for public
app.use(express.static('public'));

//ROUTES
const plotsController = require('./controllers/plots.js');
app.use('/plots', plotsController);

app.get('*', (req, res) => {
	res.status(404).json('Sorry, page not found');
});

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
