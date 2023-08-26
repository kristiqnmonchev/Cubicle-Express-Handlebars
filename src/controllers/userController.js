const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/User')

router.get('/register', (req, res) => {
    res.render('registerPage')
})

router.post('/register', async (req, res, next) => {
    const {username, password, rePassword} = req.body;

    const hash = await bcrypt.hash(password, 5)
    await userModel.create({username, password: hash})

    
    console.log(hash)
    res.redirect('/')
})



module.exports = router;