const express = require('express');
const handlebars = require('express-handlebars')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeControllers')
const cubeController = require('./controllers/cubeController')

const app = express();
const PORT = 5000;
expressConfig(app)
handlebarsConfig(app)

app.use(homeController)
app.use('/cubes', cubeController)
app.get('*', (req, res) => {
    res.render('404')
})



app.listen(PORT, () => console.log('App is running on port 5000'))