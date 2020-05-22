'use strict'
const express = require('express');
const userControler = require('../controller/userController')
const carController = require('../controller/carController')
// express router is a class to create route handlers
// router will contain the router instance
var router = express.Router();

router.get('/user/home', userControler.userHome)

router.post('/user/add', userControler.addUsers)

router.get('/car/home', carController.carHome)
router.post('/car/add', carController.addCar)
router.get('/car/remove/:id', carController.removeCar)
router.get('/car/update/:id', carController.editCar)
router.post('/car/update', carController.updateCar)


module.exports = router