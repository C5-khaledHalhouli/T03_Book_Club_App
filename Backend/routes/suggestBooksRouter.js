const express =require("express")
const suggestBooksRouter=express.Router()
const {addSuggestBook}=require("../controllers/suggestBook")

suggestBooksRouter.post("/",addSuggestBook)
module.exports=suggestBooksRouter
