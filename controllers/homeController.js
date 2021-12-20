const Employee = require('../models/employee');

module.exports.admin = function(req, res){
    Employee.find({}, function(err, employee){
        return res.render('admin',{
            employee: employee
        });
    })
}