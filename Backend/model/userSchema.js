
const mongoose= require("mongoose")


const userSchema= new mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"},
    readingList:{type:mongoose.Schema.Types.ObjectId,ref:"Books"}
})

module.exports =mongoose.model("User",userSchema)