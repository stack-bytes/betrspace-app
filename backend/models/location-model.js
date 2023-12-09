const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
    benefits: [],
    location: {
        latitude: Number,
        longitude: Number,
        radius: Number
    },
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location


