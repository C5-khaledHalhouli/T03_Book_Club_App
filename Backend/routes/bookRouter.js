const express =require("express")
const {createBook,getAllBooks,getReaders,getBookById,deleteBook}=require("../controllers/books")
const {authentication}=require("../midlleware/authantication")
const bookRouter=express.Router()


bookRouter.post("/",createBook)
bookRouter.get("/",getAllBooks)
bookRouter.get("/readers/:bookId",authentication,getReaders)
bookRouter.get("/:bookId",getBookById)
bookRouter.delete("/:bookId",authentication,deleteBook)

module.exports=bookRouter