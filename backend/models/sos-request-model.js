const mongoose = require('mongoose');

const sosRequestSchema = new mongoose.Schema({
    location: {
        latitude: Number,
        longitude: Number,
        radius: Number
    },
    description: String,
    tags: [String],
    status: Boolean,
})

const SosRequest= mongoose.model('Sos', sosRequestSchema);

module.exports = SosRequest


