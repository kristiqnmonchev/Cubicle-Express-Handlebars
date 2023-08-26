const mongoose = require('mongoose');

// User SCHEMA

const accessorySchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model('User', accessorySchema);

module.exports = User;
