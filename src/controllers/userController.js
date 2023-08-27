const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/User')
const userManager = require('../managers/userManager')
const jwt = require('../lib/jwt')
const {SECRET} = require('../config/config')



router.get('/register', (req, res) => {
    res.render('registerPage')
})

router.post('/register', async (req, res, next) => {
    const {username, password, rePassword} = req.body;

    const hash = await bcrypt.hash(password, 5)
    await userModel.create({username, password: hash})
    // res.cookie('user', username)
    
    res.redirect('/')
})

router.get('/login', async(req, res) => {
    res.render('loginPage')
})

router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    const user = await userManager.login(username);
    const validate = await bcrypt.compare(password, user.password)
    
    if (!validate) {
        return res.render('404')
    }

    const payloads = {
        _id: user._id,
        username: user.username
    }
    const token = await jwt.sign(payloads, SECRET, {expiresIn: '2d'})

    res.cookie('auth', token, {httpOnly: true})
    res.redirect('/')
})

router.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})



module.exports = router;