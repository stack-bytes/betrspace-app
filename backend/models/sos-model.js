const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema({
    location: {
        latitude: Number,
        longitude: Number,
    },
    radius: Number,
    description: String,
    
    potentialHelpers: [],
    helperAccepted: String,
    helpSetteled: Boolean,

    openDate: Date,
    closeDate: Date,
})

const SosRequest= mongoose.model('SosRequest', sosSchema);

module.exports = SosRequest


