const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user:{type:String,required:true}
},
{
    timestamps:true
})

module.exports=mongoose.model("myuser",userSchema)