const express = require("express")
const app = express();
const mongoose = require("mongoose");
const chat = require("./models/chat.js")

mongoose.set('strictQuery', true);
const path = require("path")
app.set('views',path.join(__dirname,"views"))
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname,'public')))

async function main (){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')
}
main()
.then (() =>{
    console.log("connection successfull");
})
.catch ((err)=>{
    console.log(err)
})



app.get("/chats",async (req,res)=>{
    let allChat = await chat.find()
    console.log(allChat)
    res.render("index.ejs", {allChat})
})


app.get("/",(req,res)=>{
    res.send("Server is Working")
})

app.listen(8080, ()=>{
    console.log("server is listening on port no 8080")
})