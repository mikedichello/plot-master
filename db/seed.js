const Plots = require('../models/Plots.js');
const Crops = require('../models/Crops.js');
const PlotSeeds = require('./PlotSeeds.json');
const CropSeeds = require('./CropSeeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

Plots.deleteMany({})
    .then(() => {
        return Plots.collection.insertMany(PlotSeeds);
    })
    .then(() => {
        Crops.deleteMany({})
    .then(() => {
        return Crops.collection.insertMany(CropSeeds);
    })
    .then(() => {
        process.exit();
    });

//BASH COMMAND: "npm run seed" WHEN READY TO SEED DATA