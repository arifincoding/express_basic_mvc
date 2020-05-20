// 'use strict'
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/route')

// connecting to database
mongoose.connect(process.env.DATABASE + '://' + process.env.HOST + '/' + process.env.DATABASE_NAME, {
    useNewUrlParser: true
}).then(() => console.log('connected to database')).catch(error => console.log('error occured', error))

// initializing the object instance
const app = express()

// setting the path of our views folder
app.set("views", path.resolve(__dirname, 'views'))

// setting the template engine
app.set('view engine', process.env.VIEW_ENGINE);

// fetch form data from the request
app.use(bodyParser.urlencoded({
    extended: false
}))

// the request having /user/ will be send to userRoutes module
// in that the request will be directed to the specific route
app.use('/', userRoutes)
// setting the port for the server
const port = process.env.PORT;

// showing the port on wich server is running
app.listen(port, () => console.log('server running at port', port))

module.exports = app;