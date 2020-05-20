const carModel = require('../models/car')

class carController {
    carHome(req, res) {
        carModel.getCar((err, response) => {
            res.render('car', {
                data: response
            })
        })
    }
    addCar(req, res) {
        let car = {
            merk: req.body.merk,
            harga: req.body.harga
        }
        carModel.addCar(car, (err, response) => {
            res.redirect('/car/home')
        })
    }
}

module.exports = new carController()