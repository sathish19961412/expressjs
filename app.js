const express = require('express');
const app =express();
const bodyparser=require('body-parser');
const adminRoutes = require('./routes/admin');
const adminShops =require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(adminShops);
app.use((req,res,next)=>{
    res.status(404).send('<h2>404 Page Error</h2>');
})
app.use(bodyparser.urlencoded())
app.listen(8080);