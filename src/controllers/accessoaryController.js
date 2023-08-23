const router = require('express').Router()
const accesoaryManager = require('../managers/accessoyManager')

router.get('/create', (req, res) => {
    res.render('createAccessory')
})

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;
    const body = req.body;
    await accesoaryManager.create({name, description, imageUrl})
    // console.log(body)
    res.redirect('/')
    // console.log(accesoaryManager.create())
})

module.exports = router;