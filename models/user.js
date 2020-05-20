userModel = require('../database/user.js')
class User {
    // this function will find all the user
    // there will be just a callback paramater

    getUser(cb) {
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

    addUser(newUser, cb) {
        const user = new userModel({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            city: newUser.city,
            state: newUser.state,
            country: newUser.country
        })
        user.save(cb)
    }
}

module.exports = new User();