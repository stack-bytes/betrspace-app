const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String, 
    pass: String,
    rating: Number,
    pfp: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    email: String, 
})

const User = mongoose.model('User', userSchema)

module.exports = User