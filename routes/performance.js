const express = require('express');
const router = express.Router();
 
const performanceController = require('../controllers/performanceController');

//route for craeting performnace
router.post('/create-performance', performanceController.createPerformance);

// route for updating performance
router.post('/update-performane/:id', performanceController.updatePerformance);
// console.log('router');
module.exports = router;