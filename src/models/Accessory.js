const mongoose = require('mongoose');

// Accessory SCHEMA

const accessorySchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    Description: String,
    // Cubes: [],
})

const Accesory = mongoose.model('Accesoary', accessorySchema);

module.exports = Accesory;
