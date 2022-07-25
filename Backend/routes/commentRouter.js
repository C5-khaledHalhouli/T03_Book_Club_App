const express =require("express")
const {createComment,getAllComment}=require("../controllers/comment")
const {authentication}=require("../midlleware/authantication")
const commentRouter=express.Router()



commentRouter.post("/",createComment)
commentRouter.get("/:bookId",authentication,getAllComment)

module.exports=commentRouter
