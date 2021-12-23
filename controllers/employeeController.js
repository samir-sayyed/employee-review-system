const Employee = require('../models/employee');


module.exports.employeePage = async function(req, res){
    // console.log("hii",req.body.email);
   return res.render('employee')
}

//for creating new project
module.exports.createEmployee = function(req, res){
    Employee.create(req.body, function(err, employee){
        if(err){console.log("error in creating project", err); return}

        //console.log(employee);
     return res.redirect('back');
    });
};

// redirecting to employee details page
module.exports.employeeDetails = async function(req, res){
    let user = await Employee.find({});
    // console.log(user);
    let id = req.params.id;
    let employee = await Employee.findById(id).populate('performanceList').exec(
        function(err, employee){
            return res.render('employee_details',{
                employee: employee,
                employees: user
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
    // console.log("update", id);
    Employee.findByIdAndUpdate(id, req.body, function(err, employee){
            if(err){console.log('erorr in updating employee')};
            // console.log("updated successfully");
    });
 
    return res.redirect('back');
}

//this function is for adding employee to review list
module.exports.pushReivews = async function (req, res) {
    try {
      console.log(req.params)
      console.log(req.body)
      let reviewedUser = await Employee.findById(req.params.id)
      if(reviewedUser && req.body.asign){
        if(typeof(req.body.asign)==='string'){
          await Employee.findByIdAndUpdate(req.body.asign,{$push:{"listToReview":reviewedUser.id}});
          return res.redirect('back');
        }
        for(let reviewer of req.body.asign){
          try {
            await Employee.findByIdAndUpdate(reviewer,{$push:{"listToReview":reviewedUser.id}});
          } catch (error) {
            console.log(reviewer, "not granted access for review",error);
          }
        }
      }
      return res.redirect('back')
      
    } catch (error) {
      console.log(error);
      return res.redirect('back')
    }
    
  };