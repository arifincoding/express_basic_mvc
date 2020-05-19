// 'use strict'
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users');

// connecting to database
mongoose.connect('mongodb://localhost/demoDB', {
    useNewUrlParser: true
}).then(() => console.log('connected to database')).catch(error => console.log('error occured', error))

// initializing the object instance
const app = express()

// setting the path of our views folder
app.set("views", path.resolve(__dirname, 'views'))

// setting the template engine
app.set('view engine', 'ejs');

// fetch form data from the request
app.use(bodyParser.urlencoded({
    extended: false
}))

// the request having /user/ will be send to userRoutes module
// in that the request will be directed to the specific route
app.use('/user/', userRoutes)

// setting the port for the server
const port = process.env.port || 3000;

// showing the port on wich server is running
app.listen(port, () => console.log('server running at port ${port}'))

module.exports = app;