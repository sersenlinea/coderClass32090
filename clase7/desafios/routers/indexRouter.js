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


module.exports = router