const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    pass: {
        type: String,
        required: true,
        minlength: 6, // Set a minimum length for passwords
    },
    rating: {
        type: Number,
        default: 0,
    },
    pfp: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: 'Invalid email address',
        },
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User