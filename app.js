const express = require('express');
const app =express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded())

app.use('/add-product',(req,res,next)=>{
    res.send("<h2>Add Product</h2><form action='/store-product' method='post'><input type='text' name='title'><input type='submit' value='submit'></form>");
})
app.use('/store-product',(req,res,next)=>{
    console.log("form-data",req.body);
    res.send("<h2>Product Submitted !</h2>");
})


app.listen(8080);