const mongoose = require('mongoose');

// creating the schema
const performanceSchema = new mongoose.Schema(
    {
      reviewBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
      reviewFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
      ranking:{
        type:Number,
        min: [1, "minimum ranking 1 is lowest"],
        max: [10, "higest ranking is 10"],
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

const Performance = mongoose.model('Performance', performanceSchema);
module.exports = Performance;