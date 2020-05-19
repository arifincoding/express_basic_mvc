const mongoose = require('mongoose')

// specify the field which we want in our collection

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    city: String,
    state: String,
    country: String
})

const userModel = module.exports = mongoose.model('user', userSchema)

// this function will find all the user
// there will be just a callback paramater
module.exports.getUser = (cb) => {
    userModel.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            cb(null, data)
        }
    })
}

// this will add new user to the user collection
// this will take 2 parameter.newUser is object ad cb is a callback
module.exports.addUser = (newUser, cb) => {
    const user = new userModel({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        city: newUser.city,
        state: newUser.state,
        country: newUser.country
    })
    user.save(cb)
}