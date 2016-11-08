var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
  res.render('home/index');
});

router.all('/login',(req,res)=>{
  res.send('hello world');
});


router.get('/logout',(req,res)=>{
  res.render('home/index');
});

router.all('/register',(req,res)=>{
  res.render('home/index');
});


module.exports = router;