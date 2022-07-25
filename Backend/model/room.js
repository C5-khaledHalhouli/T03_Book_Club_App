const mongoose= require("mongoose")


const roomsSchema= new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId,ref:"Book"},
    
    
    
})

module.exports =mongoose.model("Room",roomsSchema)