const express =require("express")
const db =require("./model/db")

const app=express()
app.use(express.json())


PORT=5000

app.listen(PORT,()=>{
    console.log(`server is listen at ${PORT}`);
})