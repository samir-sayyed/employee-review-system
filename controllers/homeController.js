const Employee = require('../models/employee');


module.exports.signIn = function(req, res){
   return res.render('sign_in')
}


// create session for user 
module.exports.sessionCreate = async function (req, res) {

  let user= await Employee.findOne({email: req.body.email});
  //console.log(user.userType);
    if(req.isAuthenticated()){
      if(user.userType === 'admin'){ //if employee is admin then redirect to him to admin view
        return res.redirect('/admin'); 
      }else{
        return res.redirect('/employee/employee');  //else redirect employee view
      }
    }else{
      return redirect('back');
    }
  };

    //sessionDestroy for user 
module.exports.sessionDestroy = function (req, res) {
    req.logout();
    return res.redirect('/')
  };

module.exports.admin =  function(req, res){
    Employee.find({}, function(err, employee){
        return res.render('admin',{
            employee: employee
        });
    })
};