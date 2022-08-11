const { application } = require('express');
const express = require('express')
const router = express.Router()

const frase = "Hola cómo están?";
router.get('/api/frase',(req,res)=>{
    res.json({frase:frase})
})
router.get('/api/letras/:num',({params},res)=>{
    let num = parseInt(params.num) 
    console.log(params.num);
    if(isNaN(num)){
        return res.json({error:'el parametro no es un número'})
    }
    if(num < 1 || num > frase.length){
        return res.json({error:'el parametro está fuera del rango'})
    }
    res.json({letra:frase[num - 1]})
})

router.get('/api/palabras/:num',(req,res)=>{
    let num = parseInt(req.params.num) 
    console.log(req.params.num);
    if(isNaN(num)){
        return res.json({error:'el parametro no es un número'})
    }
    const palabras = frase.split(' ');
    if(num < 1 || num > palabras.length){
        return res.json({error:'el parametro está fuera del rango'})
    }
    res.json({letra:palabras[num - 1]})
})
//desafío 2

router.get('/api/sumar/:num/:num2',(req,res)=>{
    const {num,num2} = req.params;
    res.send({suma:Number(num) + Number(num2)})
})
//query
router.get('/api/sumar/',(req,res)=>{
    const {num,num2} = req.query;
    res.send({suma:Number(num) + Number(num2)})
})

router.get('/api/operacion/:operacion',(req,res)=>{
    const operacion = req.params.operacion;
    console.log(req.params);
    res.send({operacion:eval(operacion)})
})

router.post('/api',(req,res)=>{
    res.send(' post OK')
})
router.put('/api',(req,res)=>{
    res.send('put OK')
})
router.delete('/api',(req,res)=>{
    res.send(' delete OK')
})
module.exports = router