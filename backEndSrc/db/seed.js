const Plots = require('../models/Plots.js');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Plots.deleteMany({})
	.then(() => {
		return Plots.collection.insertMany(data);
	})
	.then(() => {
		process.exit();
	});

//BASH COMMAND: "npm run seed" WHEN READY TO SEED DATA
