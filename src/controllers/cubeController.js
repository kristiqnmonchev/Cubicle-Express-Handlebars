const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager')
const accesoaryManager = require('../managers/accessoyManager')


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

    
    if (!cubes) {
        return res.redirect('/404')
    }
    res.render('details', {cubes} )
})

router.get('/:cubeId/accessories', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    const accesories = await accesoaryManager.getAll().lean();
    console.log(accesories)
    res.render('attach', {cube, accesories})
})


module.exports = router;