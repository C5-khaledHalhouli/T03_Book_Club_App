const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/T3_BookClub").then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log(err);
})