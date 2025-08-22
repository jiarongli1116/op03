import express from "express";

const app = express();

app.get("/", (req, res)=>{
       res.send("首頁"); 
});
app.get("/yi", (req, res)=>{
       res.send("yi 的首頁"); 
});


app.listen(3005, ()=>{})