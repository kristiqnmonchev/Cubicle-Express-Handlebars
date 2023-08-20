const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager')

router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create')
})

router.post('/create', (req, res) => {

    const {name, description, imageUrl, difficultyLevel} = req.body;
    cubeManager.create({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)})
    
    res.redirect('/')
})

router.get('/details/:cubeId', (req, res) => {
    const cubes = cubeManager.getOne(req.params.cubeId)
    console.log(cubes)
    if (!cubes) {
        return res.redirect('/404')
    }

    res.render('details', {cubes})
})


module.exports = router;