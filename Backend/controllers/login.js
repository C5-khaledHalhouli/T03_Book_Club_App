
const userModel=require("../model/userSchema")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")

const login=(req,res)=>{
const {email,password}=req.body
userModel.findOne({email:email.toLowerCase()}).populate("role","role -_id").then((resultM)=>{

bcrypt.compare(password,resultM.password,(err,result)=>{
    if(err){
       return res.status(404).json({err})
    }
    if(result){
        const payload={email:resultM.email,userName:resultM.userName,userid:resultM._id,role:resultM.role.role}
        console.log(payload);
        const secret="book"
        const token =jwt.sign(payload,secret)
        res.status(200).json(token)
    }else{
        return res.status(404).json({err:"password is not correct"})
    }
    console.log(result);
})
}).catch((err)=>{
    res.status(404).json({err})
})

}
module.exports= {login}