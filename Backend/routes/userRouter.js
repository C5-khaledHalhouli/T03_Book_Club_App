const express =require("express")
const {createNeWUser}=require("../controllers/user")
const userRouter=express.Router()


userRouter.post("/",createNeWUser)


module.exports=userRouter
