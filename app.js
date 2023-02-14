const http=require('http');
const express = require('express');

const app =express();
app.use((req,res,next)=>{
    console.log("First Middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("Second Middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("Third Middleware");
    res.send("<center><h1>Hello From Expressjs !</h1></center>")
})
const server=http.createServer(app);
server.listen(8080);