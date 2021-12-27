const Employee = require('../models/employee');

// route for employee page
module.exports.employeePage = async function(req, res){
    let revieweeList = [];
    const loginUser = res.locals.user;
      revieweeList = await Employee.find({_id:loginUser.listToReview});

   let employee = await Employee.findById(res.locals.user.id).populate('performanceList').exec(
        function(err, employee){
            return res.render('employee',{
              revieweeList,
              employee
            });
        })
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
 
    return res.redirect('back');
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
      // console.log(req.params.id)
      console.log(req.body.assign)
      let reviewingUser = req.params.id;
      let reviewedUser = req.body.assign;

     await Employee.findByIdAndUpdate(reviewingUser,{$push:{"listToReview":reviewedUser}});
      return res.redirect('back')
      // listToReview
    
  };


//   controller for add review page

module.exports.addReviewPage = async function(req, res){
    let revieweeList = [];
    const loginUser = req.params.id;
    if(loginUser.userType==='employee'){
      revieweeList = await Employee.find({_id:loginUser.listToReview});
    }
   let employee = await Employee.findById(req.params.id).populate('performanceList').exec(
        function(err, employee){
            return res.render('add-review',{
              revieweeList,
              employee
            });
        })

    // console.log(req.params.id);
    // return res.redirect('back')
}

// creating super user
module.exports.superUser = async function(req,res){
    // if there is any user exit in data base that mean we already used the super user
    try {
      let users = await Employee.find({userType:'admin'});
      if(users.length>0){
        return res.end('<h1>you already used super user</h1>')
      }
      await Employee.create({
        userType:"admin",
        employeeName:"Samir",
        email:"samir@gmail.com",
        password:"samir",
        confirmPassword:"samir",
        department:"HR"
      })
      return res.end('<h3>user credentials</h3> <p>email:  samir@gmail.com <br> paasword :  samir</p> <h2>please delete samir as soon as you create new user</h2> </h2>')
    } catch (error) {
      console.log(error);
      return res.end('<h1>server end error please try again</h1>');
    }
  }
  