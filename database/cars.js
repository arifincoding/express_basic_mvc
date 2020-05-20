'use strict'
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    merk: String,
    harga: Number
})

const carModel = mongoose.model('cars', carSchema);

module.exports = carModel