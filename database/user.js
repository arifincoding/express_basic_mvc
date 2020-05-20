const mongoose = require('mongoose')

// specify the field which we want in our collection

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    city: String,
    state: String,
    country: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel