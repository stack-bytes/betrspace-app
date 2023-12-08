const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String, 
    pass: String,
    pfp: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    email: String, 
    reputationpoints: Number,
})