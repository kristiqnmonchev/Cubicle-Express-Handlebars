const express = require('express');
const router = express.Router();
const cubeManager = require('../managers/cubeManager')

router.get('/', (req, res) => {
    const {search, from, to} = req.query;

    const cubes = cubeManager.getAll(search, from, to);

    res.render('index', {cubes})
})

router.get('/about', (req, res) => {
    res.render('about')
})



module.exports = router;