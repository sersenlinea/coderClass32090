var express = require('express');
var router = express.Router();

let personas=[];

router.get('/', (req,res)=>{
  res.send(personas)
});

router.post('/',(req,res)=>{
  personas=[...personas,req.body];
  res.send(req.body)
})

module.exports = router;
