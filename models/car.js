'use strict'
const carCollection = require('../database/cars')
const model = require('../vendor/model')
class Car extends model {
    constructor() {
        super(carCollection)
    }

    getCar(callback) {
        this.findAll(callback)
    }

    addCar(newCar, callback) {
        this.add(newCar, callback)
    }

    editCar(id, callback) {
        this.findById(id, callback)
    }

    updateCar(id, carData, callback) {
        this.updateById(id, carData, callback);
    }

    removeCar(id, callback) {
        this.deleteById(id, callback)
    }
}

module.exports = new Car()