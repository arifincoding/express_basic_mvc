'use strict'
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

    editCar(req, res) {
        carModel.editCar(req.params.id, (response) => {
            res.render('carEdit', {
                data: response
            })
        })
    }

    updateCar(req, res) {
        let carData = {
            merk: req.body.merk,
            harga: req.body.harga
        }
        carModel.updateCar(req.body.id, carData, (response) => {
            res.redirect('/car/home')
        })
    }

    removeCar(req, res) {
        carModel.removeCar(req.params.id, (response) => {
            res.redirect('/car/home')
        })
    }
}

module.exports = new carController()