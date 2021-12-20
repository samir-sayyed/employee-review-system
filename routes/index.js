const express = require('express');
const router = express.Router();
 
const homeController = require('../controllers/homeController');

router.get('/', homeController.admin);

router.use('/employee', require('./employee'));


// console.log('router');
module.exports = router;