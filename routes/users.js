var express = require('express');
var userControler = require('../controller/userController')

// express router is a class to create route handlers
// router will contain the router instance
var router = express.Router();

router.get('/home', userControler.userHome)

router.post('/add', userControler.addUsers)

module.exports = router