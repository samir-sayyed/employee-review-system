const Employee = require('../models/employee');
const Performance = require('../models/performance');


//adding performance to employee
module.exports.createPerformance = function(req, res){

    Employee.findById(req.body.reviewFor, function(err, employee){
        
        if(employee){
            Performance.create({
                description: req.body.description,
                ranking: req.body.ranking,
                reviewFor: req.body.reviewFor,
                reviewBy: req.body.reviewBy,
            }, function(err, performance){
                if(err){console.log("error in creating performance", err)};
                // console.log(performance);
                console.log(employee.performanceList);
                employee.performanceList.push(performance);
                employee.save();
            })
        }
    });

   return res.redirect('back');
}

// update performance

module.exports.updatePerformance = function(req, res){
    let id = req.params.id;
    Performance.findByIdAndUpdate(id, req.body, function(err, employee){
            if(err){console.log('erorr in updating performance')};
            // console.log("updated successfully");
    });
 
    return res.redirect('back');
}

// delete performance 
module.exports.delete = async function (req, res) {
    try {
      let performance = await Performance.findById(req.params.id);
      await performance.remove();
      return res.redirect('back');
    } catch (error) {
      console.log(error);
      return res.redirect('back');
    }
  };