const Employee = require('../models/employee');
console.log("hi");
//for creating new project
module.exports.createEmployee = function(req, res){
    Employee.create(req.body, function(err, employee){
        if(err){console.log("error in creating project", err); return}

        //console.log(employee);
     return res.redirect('/')
    });
};

module.exports.employeeDetails = function(req, res){
    // console.log(req.params.id);

    let id = req.params.id;
    Employee.findById(id).populate('performanceList').exec( //populating perfarmances so we can use them in a front end
        function(err, employee){
            //console.log(project);
            return res.render('employee_details',{
                employee: employee
            });
        })
}