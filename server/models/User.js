const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter your name']
    },
    email: {
        type: String,
        required: [true,'Please your mail'],
        unique: true,
        lowercase: true,
        validate:[isEmail,'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true,'Please enter a password'],
        minlength: [6,'Password to should be atleast 6 characters long']
    }
})

const User = mongoose.model('user', userSchema);
module.exports = User;