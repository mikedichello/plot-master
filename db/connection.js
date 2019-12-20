const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/plots'

//CONNECT TO MONGO
mongoose.connect(mongoURI, {useNewURLParser: true},
    () => console.log('MongoDB connection established:', mongoURI)
)
mongoose.Promise = Promise;

module.exports = mongoose;