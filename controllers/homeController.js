const Employee = require('../models/employee');


module.exports.signIn = function(req, res){
   return res.render('sign_in')
}


// create session for user 
module.exports.sessionCreate = function (req, res) {
    // console.log(typeof req.params.isAdmin);
    if(req.isAuthenticated()){
    //   if(req.params.isAdmin==="true"){
    //     return res.redirect('/admin');
    //   }
      return res.redirect('/admin'); 
  
    }else{
      return redirect('back');
    }
  };

    //sessionDestroy for user 
module.exports.sessionDestroy = function (req, res) {
    req.logout();
    return res.redirect('/')
  };

module.exports.admin = function(req, res){
    Employee.find({}, function(err, employee){
        return res.render('admin',{
            employee: employee
        });
    })
}