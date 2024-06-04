const mongoose = require("mongoose");
const chat = require("./models/chat.js")

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

const insertData = async ()=>{
    const result = await chat.insertMany([
        {
        from:"ram",
        to:"syam",
        massage:"hello, how are you dear friend",
        created_at: new Date ()
    },
    {
        from:"nikil",
        to:"ajit",
        massage:"hello,please come here",
        created_at: new Date ()
    },
    {
        from:"ram",
        to:"syam",
        massage:"hii, i am fine",
        created_at: new Date ()
    }]);
    console.log(result)
}
// insertData()

const insertData = async ()=>{
    const result = await chat.insertMany([{
        from:"shivam",
        to: "nikhil",
        massage: "when you will be free"
    },
    {
        from:"Nikil",
        to: "Shivam",
        massage: " i will be free at evening "
    },
    {
        from:"shivam",
        to: "nikhil",
        massage: "Ok then we will go to market "
    }
      ]);
    console.log(result)
}
// insertData()

