const express = require('express');
const handlebars = require('express-handlebars')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express();
const PORT = 5000;
expressConfig(app)
handlebarsConfig(app)


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log('App is running on port 5000'))