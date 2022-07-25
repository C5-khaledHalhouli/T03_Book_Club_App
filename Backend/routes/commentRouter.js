const express =require("express")
const {createComment,getAllComment,deleteComment}=require("../controllers/comment")
const {authentication}=require("../midlleware/authantication")
const commentRouter=express.Router()



commentRouter.post("/",createComment)
commentRouter.get("/:bookId",authentication,getAllComment)
commentRouter.delete("/:commentId",authentication,deleteComment)
module.exports=commentRouter
