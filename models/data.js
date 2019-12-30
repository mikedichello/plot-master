const mongoose = require('../db/connection')

const PlantSchema = new mongoose.Schema({
    name: String,
    harvestTime: String,
    plantingTime: String,
})

mongoose.model('Plants', PlantSchema)

module.exports = mongoose