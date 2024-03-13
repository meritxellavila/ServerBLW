const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name:{
      type: String,
      required:true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
 
);

const User = model("User", userSchema);

module.exports = User;
