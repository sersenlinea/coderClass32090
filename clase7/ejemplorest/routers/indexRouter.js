const express = require('express')
const router = express.Router();
//read
router.get('/autos/getAll',(req,res)=>{
    res.send({msg:`Reicibimos una petición de tipo get getAll`})
})
//un solo datos
router.get('/autos/:id',({params},res)=>{
    console.log(params);
    res.json({msg:`Recibimos una petición get`,id:params.id})
})
//por busqueda
router.get('/autos',({query},res)=>{
    console.log(query);
    res.json({msg:`Recibimos una busqueda de`,bsq:query.producto})
})
//update
router.post('/autos/update',({body},res)=>{
    
    res.send({msg:`recibí petición de met post`,name:body.name,apellido:body.lastName})
})

module.exports = router;