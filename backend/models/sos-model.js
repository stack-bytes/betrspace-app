const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema({
    location: {
        latitude: String,
        longitude: String,
    },
    radius: Number,
    description: String,
    
    personInNeedId: Number,

    potentialHelpers: [],
    helperAccepted: String,
    helpSetteled: Boolean,

    openDate: Date,
    closeDate: Date,
})

const SosRequest= mongoose.model('SosRequest', sosSchema);

module.exports = SosRequest


