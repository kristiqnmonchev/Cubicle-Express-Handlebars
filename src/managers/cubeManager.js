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

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId);