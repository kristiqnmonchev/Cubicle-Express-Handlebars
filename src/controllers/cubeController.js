const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager')


router.get('/create', (req, res) => {
    // console.log(cubeManager.getAll())
    res.render('create')
})

router.post('/create', async (req, res) => {

    const {name, description, imageUrl, difficultyLevel} = req.body;
    await cubeManager.create({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)})
    
    res.redirect('/')
})

router.get('/details/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    const cubes = await cubeManager.getOne(id)
    console.log(cubes)

    
    if (!cubes) {
        return res.redirect('/404')
    }
    res.render('details', {cubes} )
})

router.get('/accessories/:cubeId', (req, res) => {
    res.render('attach')
})


module.exports = router;