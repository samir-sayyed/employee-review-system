
const express = require('express');
const router = express.Router();

const passport  = require("../config/passport");
 
const homeController = require('../controllers/homeController');
const employeeController = require('../controllers/employeeController');

router.get('/', homeController.signIn);

router.get("/admin", passport.autherizedUser ,homeController.admin);

//create session
router.post('/create-session', passport.authenticate("local") ,homeController.sessionCreate);

//destroy the session
router.get("/session-destroy", homeController.sessionDestroy);

router.use('/employee', require('./employee'));

router.use('/performance', require('./performance'));

router.get("/samir", employeeController.superUser);


// console.log('router');
module.exports = router;