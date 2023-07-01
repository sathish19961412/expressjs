const express =require('express');
const bodyParser = require('body-parser');
const router =express.Router();
const rootDir =require('../utils/path');
const path = require('path');
router.use(bodyParser.urlencoded())

router.get('/add-product',(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
  console.log('form-data:',req.body);
  res.send('Form Submitted !');
})

module.exports = router;