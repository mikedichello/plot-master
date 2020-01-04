// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const cors = require('cors')

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/plots2';
const PORT = process.env.PORT || 8000;

// Connect to Mongo
mongoose.connect(mongoURI, () =>
console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON
const passport = require('./backEndSrc/config/passport')()
app.use(passport.initialize());

// Routes
const plotsController = require('./backEndSrc/controllers/plots.js');
app.use('/api/plots', plotsController);

const usersController = require('./backEndSrc/controllers/users.js');
app.use('/api/users', usersController);

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + './public/index.html'));
});

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
