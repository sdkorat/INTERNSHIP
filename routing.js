const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("You are at the HOME page.");
})
app.get("/about",(req,res)=>{
    res.send("You are at the ABOUT page.");
})
app.get("/search/:id",(req,res)=>{
   var id=req.params.id;
   res.send("Your Search ID is "+id);
})
app.get("/searchname/:name",(req,res)=>{
    var name=req.params.name;
    res.send("Your Name is "+name);
 })
app.get("/mathsum/:no1/:no2",(req,res)=>{
    var no1=req.params.no1;
    var no2=req.params.no2;
    var sum=parseInt(no1)+parseInt(no2);
    res.send(`The sum of ${no1} and ${no2} is ${sum}`);
})
app.get("/mathsub/:no1/:no2",(req,res)=>{
    var no1=req.params.no1;
    var no2=req.params.no2;
    var sub=parseInt(no1)-parseInt(no2);
    res.send(`The sum of ${no1} and ${no2} is ${sub}`);
})
app.listen(8000,"127.0.0.1",()=>{
    console.log("Server Started..!");
})