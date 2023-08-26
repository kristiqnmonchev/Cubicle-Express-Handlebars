const express = require('express');
const handlebars = require('express-handlebars')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeControllers')
const cubeController = require('./controllers/cubeController')
const accesoaryController = require('./controllers/accessoaryController')
const mongoose = require('./config/mongooseConfing')
const userController = require('./controllers/userController')

const app = express();
const PORT = 5000;
expressConfig(app)
handlebarsConfig(app)
mongoose.connectDb()

app.use(homeController)
app.use('/cubes', cubeController)
app.use('/accessoary', accesoaryController)
app.use('/user', userController)
app.get('*', (req, res) => {
    res.render('404')
})



app.listen(PORT, () => console.log('App is running on port 5000'))