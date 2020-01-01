const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
	name: String,
	harvestTime: String,
	plantingTime: String,
});

const Crops = mongoose.model('Crop', CropSchema);

module.exports = Crops;
