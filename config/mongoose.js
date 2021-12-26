const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://samirsayyed:786Samir!@cluster1.7ryvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;