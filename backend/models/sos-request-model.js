const mongoose = require('mongoose');

const sosRequestSchema = new mongoose.Schema({
    userId: String, 
    location: {
        latitude: Number,
        longitude: Number,
        radius: Number
    },
    description: String,
    tags: [String],
    status: Boolean,

})