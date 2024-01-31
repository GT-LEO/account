const mongoose = require("mongoose");

//const {Schema, model} = mongoose;  //OR
const User = new mongoose.Schema(
    {
        
firstName:{
type:String,
trim:true,
required:true,
// lowercase:true,
},
lastName:{
    type:String,
    trim:true,
    required:true,
    // lowercase:true,
},
  userName:{
type:String,
trim:true,
// lowercase:true,
  },
  email:{
type:String,
required:true,
unique:true,
  },
  password:{
 type:String,
trim:true,
required:true,
// lowercase:true,
unique:true
  },

}
);
//create a user
const userModel = mongoose.model("user",User);

//export the user model
module.exports = userModel;
