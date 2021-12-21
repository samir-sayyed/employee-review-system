const express = require('express');
const router = express.Router();
 
const homeController = require('../controllers/homeController');

router.get('/', homeController.admin);

router.use('/employee', require('./employee'));

router.use('/performance', require('./performance'));


// console.log('router');
module.exports = router;