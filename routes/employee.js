const express = require('express');
const router = express.Router();
 
const employeeController = require('../controllers/employeeController');

router.post('/create-employee', employeeController.createEmployee);
router.get('/employee-details/:id', employeeController.employeeDetails);

// console.log('router');
module.exports = router;