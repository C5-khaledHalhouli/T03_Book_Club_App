const mongoose= require("mongoose")


const booksSchema= new mongoose.Schema({
    bookName:{type:String,required:true,unique:true},
    description:{type:String},
    img:{type:String},
    
})

module.exports =mongoose.model("Books",booksSchema)