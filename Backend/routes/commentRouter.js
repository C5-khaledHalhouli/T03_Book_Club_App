const express =require("express")
const {createComment,getAllComment}=require("../controllers/comment")
const commentRouter=express.Router()

commentRouter.post("/",createComment)
commentRouter.get("/:bookId",getAllComment)

module.exports=commentRouter
