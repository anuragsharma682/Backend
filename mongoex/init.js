const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection successfull");
    })
    .catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};
let allchats=[
    {
        from:"Anurag",
        to:"ariba",
        msg:"i love you",
        created_at:new Date()
    },
    {
        from:"Sheikh",
        to:"sharmaji",
        msg:"Kanpur",
        created_at:new Date()
    },
    {
        from:"Ahisehk",
        to:"aryan",
        msg:"lets study",
        created_at:new Date()
    },
    {
        from:"baliyan",
        to:"aman",
        msg:"ghar chale",
        created_at:new Date()
    },
];

Chat.insertMany(allchats);