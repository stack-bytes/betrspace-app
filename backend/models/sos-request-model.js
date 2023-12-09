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
    helper: String,
    helperAccepted: Boolean,
})

const SosRequest= mongoose.model('SosRequest', sosRequestSchema);

module.exports = SosRequest


