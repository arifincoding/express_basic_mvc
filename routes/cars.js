const carController = require('../controller/carController')
const express = require('express')

const router = express.Router()

router.get('/home', carController.carHome)
router.post('/add', carController.addCar)

module.exports = router