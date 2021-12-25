const express = require('express');
const router = express.Router();
const passport  = require("../config/passport");
 
const employeeController = require('../controllers/employeeController');


router.get('/employee', employeeController.employeePage);
//route for craeting employee
router.post('/create-employee', employeeController.createEmployee);

//route for employees details page
router.get('/employee-details/:id', employeeController.employeeDetails);

//route for deleting employee
router.get('/delete-employee/:id', employeeController.deleteEmployee);

//route for updating employee
router.post('/update-employee/:id', employeeController.updateEmployee);

router.post("/:id/push-reviews", employeeController.pushReivews);

//route for add review by employee
router.get("/add-review/:id", employeeController.addReviewPage);

// console.log('router');
module.exports = router;