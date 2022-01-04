const mongoose = require("mongoose");

//comment Schema
const commentSchema= new mongoose.Schema({
    reply:{type:String,required:true},
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true

})
module.exports=mongoose.model("comment",commentSchema);
