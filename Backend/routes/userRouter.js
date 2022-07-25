const express =require("express")
const {createNeWUser,addBookToReading}=require("../controllers/user")
const {authentication}=require("../midlleware/authantication")
const userRouter=express.Router()


userRouter.post("/",createNeWUser)
userRouter.post("/:bookId",authentication,addBookToReading)

module.exports=userRouter
