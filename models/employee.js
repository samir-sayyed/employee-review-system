const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    employeeName:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        unique: true
    },

    userType: {
        type:String,
        enum: ["admin", "employee"],
        required:true
      },

    department:{
        type:String,
        enum: ["HR", "Sales", "Production","Marketing"],
        required:true
      },
      performanceList: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Performance"
        },
      ],
      listToReview: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "employees",
        },
      ],
},{
  timestamps:true
})

const Employees = mongoose.model('Employees', employeeSchema);
module.exports = Employees;