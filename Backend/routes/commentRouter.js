const express =require("express")
const {createComment,getAllComment}=require("../controllers/comment")
const commentRouter=express.Router()
const {authentication}=require("../midlleware/authantication")
commentRouter.post("/",createComment)
commentRouter.get("/:bookId",authentication,getAllComment)

module.exports=commentRouter
