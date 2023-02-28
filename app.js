const express = require('express');
const app =express();
const bodyparser=require('body-parser');
const adminRoutes = require('./routes/admin');
const adminShops =require('./routes/shop');
app.use(adminRoutes);
app.use(adminShops);
app.use(bodyparser.urlencoded())
app.listen(8080);