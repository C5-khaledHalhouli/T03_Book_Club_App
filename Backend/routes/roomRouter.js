const express =require("express")
const roomRouter=express.Router()
const {createRoom,deleteRoom}=require("../controllers/room")



roomRouter.post("/:bookId",createRoom)
roomRouter.delete("/:roomId",deleteRoom)
module.exports=roomRouter