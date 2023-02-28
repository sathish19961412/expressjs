const express = require('express');
const app =express();
const bodyparser=require('body-parser');

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
app.use(bodyparser.urlencoded())
app.listen(8080);