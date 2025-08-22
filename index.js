import express from "express";

const app = express();

app.get("/", (req, res)=>{
       res.send("首頁"); 
});

app.listen(3005, ()=>{})