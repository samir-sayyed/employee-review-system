const Employee = require('../models/employee');


module.exports.employeePage = function(req, res){
   return res.render('employee')
}

//for creating new project
module.exports.createEmployee = function(req, res){
    Employee.create(req.body, function(err, employee){
        if(err){console.log("error in creating project", err); return}

        //console.log(employee);
     return res.redirect('/')
    });
};

// redirecting to employee details page
module.exports.employeeDetails = function(req, res){
    console.log(req.params.id);
    let id = req.params.id;

    Employee.findById(id).populate('performanceList').exec(
        function(err, employee){
            return res.render('employee_details',{
                employee: employee
            });
        })
}

// deleting employee
module.exports.deleteEmployee = function(req, res){
    let id = req.params.id;
    //console.log(id);
    Employee.findById(id, function(err, employee){
            if(err){console.log('erorr in deleting employee')};
            employee.remove();
    });
 
    return res.redirect('/');
}

// updating employee employee
module.exports.updateEmployee = function(req, res){
    let id = req.params.id;
    console.log("update", id);
    Employee.findByIdAndUpdate(id, req.body, function(err, employee){
            if(err){console.log('erorr in updating employee')};
            // console.log("updated successfully");
    });
 
    return res.redirect('back');
}