const cubes = []

exports.create = (cubeData) => {
    const newCube = {
        id: [],
        ...cubeData,
    }
    cubes.push(newCube)
    return newCube;

}

exports.getAll = () => cubes.slice();