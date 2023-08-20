const express = require('express');
const rounter = express.Router();

rounter.get('/', (req, res) => {
    res.render('index')
})


module.exports = rounter;