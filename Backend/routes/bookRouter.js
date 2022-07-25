const express =require("express")
const {createBook}=require("../controllers/books")
const bookRouter=express.Router()


bookRouter.post("/",createBook)



module.exports=bookRouter