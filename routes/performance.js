const express = require('express');
const router = express.Router();

const passport  = require("../config/passport");
 
const performanceController = require('../controllers/performanceController');

//route for craeting performnace
router.post('/create-performance', performanceController.createPerformance);

// route for updating performance
router.post('/update-performane/:id', performanceController.updatePerformance);

//admin will delete it
router.get("/:id/delete",passport.autherizedUser, performanceController.delete);


// console.log('router');
module.exports = router;