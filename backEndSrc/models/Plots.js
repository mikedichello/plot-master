const mongoose = require('../db/connection');

const PlotSchema = new mongoose.Schema({
	height: Number,
	width: Number,
	subPlot: [Object],
});

const Plots = mongoose.model('Plot', PlotSchema);

module.exports = Plots;
