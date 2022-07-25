
const mongoose= require("mongoose")
const bycrypt =require("bcrypt")

const userSchema= new mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"},
    readingList:[{type:mongoose.Schema.Types.ObjectId,ref:"Books"}]
})

userSchema.pre("save",async function(){
  
    this.email=this.email.toLowerCase()
   

    const salt=process.env.SALT
    const hashPassword= await bycrypt.hash(this.password,+salt)
    this.password=hashPassword
})

module.exports =mongoose.model("User",userSchema)