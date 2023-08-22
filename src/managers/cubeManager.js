const uniqId = require('uniqid')
const mongoose = require('mongoose')
const cubes = []

// CUBE SCHEMA
const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
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

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId);