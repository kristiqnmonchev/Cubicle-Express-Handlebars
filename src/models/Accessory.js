const mongoose = require('mongoose');

// Accessory SCHEMA

const accessorySchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    Description: String,
    Cubes: [],
})

exports.Accesoary = () => mongoose.model('Accesoary', accessorySchema);
