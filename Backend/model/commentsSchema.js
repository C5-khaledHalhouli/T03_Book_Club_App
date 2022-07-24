const mongoose= require("mongoose")


const commentsSchema= new mongoose.Schema({
    comment:{type:String,required:true,unique:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    book:{type:mongoose.Schema.Types.ObjectId,ref:"Books"},
    
})

module.exports =mongoose.model("Comments",commentsSchema)