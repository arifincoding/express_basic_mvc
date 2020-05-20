const carCollection = require('../database/cars')

class Car {
    getCar(callback) {
        carCollection.find((err, response) => {
            callback(null, response)
        })
    }

    addCar(newCar, callback) {
        let car = new carCollection({
            merk: newCar.merk,
            harga: newCar.harga
        })
        car.save(callback)
    }
}

module.exports = new Car()