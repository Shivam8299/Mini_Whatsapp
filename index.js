const express = require("express")
const app = express();
const mongoose = require("mongoose");
const chat = require("./models/chat.js")

mongoose.set('strictQuery', true);
const path = require("path")
app.set('views',path.join(__dirname,"views"))
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended:true }))

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

// new route

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")

})

// index route

app.get("/chat",async (req,res)=>{
    let allChat = await chat.find()
    // console.log(allChat)
    res.render("index.ejs", {allChat})
})

// Create Route 

app.post("/chats",(req,res)=>{
    let {from, to, message} = req.body;
    let newChat = new chat ({
        from:from,
        to:to,
        massage: message,
        create_at: new Date()
    })
    newChat.save().then(()=>{
        console.log("Chat was saved")
    })
    .catch((err)=>{
        console.log(err)
    })
    res.redirect("/chat")
})
// home route

app.get("/",(req,res)=>{
    res.send("Server is Working")
})

app.listen(8080, ()=>{
    console.log("server is listening on port no 8080")
})