const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('registerPage')
})

router.post('/register', (req, res, next) => {
    const data = req.body;
    try {
        Object.values(data).forEach(x => {
            if (x === '') {
                throw new Error('All fields are required')
            }
        })
    } catch(err) {
        next(err)
    }
    
    console.log(data)
    res.redirect('/user/register')
})



module.exports = router;