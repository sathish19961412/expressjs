const express = require('express');
const bodyparser=require('body-parser');
const router =express.Router();

router.use(bodyparser.urlencoded())
router.get('/add-product',(req,res,next)=>{
    res.send("<h2>Add Product</h2><form action='http://localhost:8080/admin/store-product' method='post'><input type='text' name='title'><input type='submit' value='submit'></form>");
})
router.post('/add-product',(req,res,next)=>{
    console.log("form-data",req.body);
    res.send("<h2>Product Submitted !</h2>");
})

module.exports = router;