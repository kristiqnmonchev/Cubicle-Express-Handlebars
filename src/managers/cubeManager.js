const uniqId = require('uniqid')
const mongoose = require('mongoose')
const Accesory = require('../models/Accessory')
const cubes = []

// CUBE SCHEMA
const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: Accesory
    }]
})
const Cube = mongoose.model('Cube', cubeSchema)

// ======== CRUD ============ BELOW ============

exports.create = async (cubeData) => {
    const newCube = await Cube.create(cubeData)
    return newCube;
}


exports.getAll = async( search, from, to) => {
    
    let result = await Cube.find().lean()
    if (search) {
        result = result.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (from) {
        result = result.filter(x => x.difficultyLevel >= Number(from) )
    }
    if (to) {
        result = result.filter(x => x.difficultyLevel >= Number(to) )
    }
    // console.log(result)
    return result
}

exports.getOne = (cubeId) => Cube.findById(cubeId).lean()
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories').lean()

exports.attachAccessory = async (cubeId, accessoryId) => {
    const currentCube = await Cube.findById(cubeId);
    currentCube.accessories.push(accessoryId)
    return currentCube.save()
}
