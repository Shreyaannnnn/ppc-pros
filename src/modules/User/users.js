const mongoose = require('mongoose');
const { mongooseInstance } = require('../../../db.config');



const userSchema = new mongoose.Schema({
    username: { type: String, required: true },

    email: { type: String, unique: true, required: true },

    bio: {
        type: String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },

});
const User = mongooseInstance.model('User', userSchema);
module.exports = User;