const mongoose = require('../db/connection')

const CropSchema = new mongoose.Schema({
    name: String,
    harvestTime: String,
    plantingTime: String,
})

mongoose.model('Crops', CropSchema)

module.exports = mongoose