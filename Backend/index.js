const express =require("express")
require("dotenv").config()
const db =require("./model/db")
const userRouter=require("./routes/userRouter")
const bookRouter=require("./routes/bookRouter")
const commentRouter=require("./routes/commentRouter")
const roleRouter=require("./routes/roleRouter")
const suggestBooksRouter=require("./routes/suggestBooksRouter")
const loginRouter=require("./routes/loginRouter")
const cors =require("cors")
const roomRouter=require("./routes/roomRouter")
const app=express()
app.use(express.json())
app.use(cors())


app.use("/user",userRouter)
app.use("/book",bookRouter)
app.use("/comment",commentRouter)
app.use("/role",roleRouter)
app.use("/suggestBooks",suggestBooksRouter)
app.use("/login",loginRouter)
app.use("/room",roomRouter)

PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is listen at ${PORT}`);
})