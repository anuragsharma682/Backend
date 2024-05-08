const express=require("express");
const app=express();
const port=8080;
app.use(express.static("public"));
app.set("view engine","ejs");
 app.get("/",(req,res)=>{
     res.render("home.ejs");
 });
app.get("/rolldice",(req,res)=>{
     let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dicevalue});
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
});
app.listen(port,()=>{
    console.log(`listening on port https://localhost:${port}`);
});