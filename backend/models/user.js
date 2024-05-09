const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
      name:{type:String , require:true, minlength:3 , maxlength:30},
      email:{
            type:String,
            required:true
}
})