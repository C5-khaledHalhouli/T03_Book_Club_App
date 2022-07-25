const mongoose= require("mongoose")


const commentsSchema= new mongoose.Schema({
    comment:{type:String,required:true,unique:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    room:{type:mongoose.Schema.Types.ObjectId,ref:"Room"},
    
})

module.exports =mongoose.model("Comments",commentsSchema)