const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myuser",
        require: true,
    },
    notices:{
        type:String, require:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("notice",noticeSchema)