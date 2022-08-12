var express = require('express');
var router = express.Router();
const ContenedorMemoria = require('../Contenedor/contenedorMemoria')
const data = new ContenedorMemoria();
router.get('/', function(req, res, next) {
  //devuelve todos los productos
  res.send({data:data.getAll()});
});

router.get('/:id',(req,res)=>{
  //devuelve un productos por su id
  let obj =data.getOne(req.params.id)
  if(obj.length==0){
    res.send('no se puedo conseguir el producto')
  }else{
  res.send({data:obj})
}
})
router.post('/',({body},res)=>{
  //enviamos los datos
  data.addOne(body)
  res.send({datos:body})
})
router.put('/:id',(req,res)=>{
  //modificar según id
  let id = req.params.id;
  res.send({datos:req.body})
})
router.delete('/:id',(req,res)=>{
  //elimina según id
  let newData= data.deleteOne(req.params.id)
  res.send({datos:newData})
})

module.exports = router;
