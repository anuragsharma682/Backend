const express=require("express");
const app=express();
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("you contacted root path");
});
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/banana",(req,res)=>{
//     res.send("you contacted banana path");
// });
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlstr=`<h1> welcome to the page of @ ${username}</h1>`;
    res.send(htmlstr);
});

app.get("/Search",(req,res)=>{
    let {q}=req.params;
    if(!q){
        res.send(`<h1>no search query</h1>`);
    }
    res.send(`<h1>these are the results of ${q}</h1>`);
});