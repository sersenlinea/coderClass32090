var express = require('express');
var router = express.Router();

let mascotas=[];

router.get('/', (req,res)=>{
  res.send(mascotas)
});

router.post('/',(req,res)=>{
  mascotas=[...mascotas,req.body];
  res.send(req.body)
})
router.delete('/:id',(req,res)=>{
  let newData=mascotas.filter(m=>m.id!=req.params.id)
mascotas=newData;
 
  res.send(req.body)
})
module.exports = router;
