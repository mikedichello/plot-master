const mongoose = require('mongoose');

const PlotSchema = new mongoose.Schema({
	height: {type=Number, required=true},
	width: {type=Number, required=true},
	title: {type=String, required=true},
	subPlot: [Object],
});

const Plots = mongoose.model('Plot', PlotSchema);

module.exports = Plots;
