const mongoose=require('mongoose');
main().then(()=>{
    console.log("connection successful");
})
.catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});


const user=mongoose.model("user",userSchema);
const user1=new user({
    name:"adam",
    email:"adam@gmail.com",
    age:48,
});
user1.save();