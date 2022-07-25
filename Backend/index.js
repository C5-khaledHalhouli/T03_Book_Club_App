const express =require("express")
const db =require("./model/db")
const userRouter=require("./routes/userRouter")
const bookRouter=require("./routes/bookRouter")
const commentRouter=require("./routes/commentRouter")
const roleRouter=require("./routes/roleRouter")
const suggestBooksRouter=require("./routes/suggestBooksRouter")

const app=express()
app.use(express.json())


app.use("/user",userRouter)
app.use("/book",bookRouter)
app.use("/comment",commentRouter)
app.use("/role",roleRouter)
app.use("/suggestBooks",suggestBooksRouter)


PORT=5000

app.listen(PORT,()=>{
    console.log(`server is listen at ${PORT}`);
})