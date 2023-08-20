const uniqId = require('uniqid')
const cubes = []

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData,
    }
    cubes.push(newCube)
    return newCube;

}

exports.getAll = ( search, from, to) => {
    
    let result = cubes.slice();
    if (search) {
        result = result.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (from) {
        result = result.filter(x => x.difficultyLevel >= Number(from) )
    }
    if (to) {
        result = result.filter(x => x.difficultyLevel >= Number(to) )
    }
    return result
}

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId);