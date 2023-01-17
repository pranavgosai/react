const  mongoose = require("mongoose");





const mixdataSchema = new mongoose.Schema({
  Email:{
    type: String
  } ,
  Password:{
    type:String
  }
  });

  

  const user = new mongoose.model("user",mixdataSchema);

  module.exports = user;