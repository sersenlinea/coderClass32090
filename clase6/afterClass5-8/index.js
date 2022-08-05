const express = require('express')
const app = express()
const Archivos = require('./contenedor/Contenedor')
let data = new Archivos('./productos.txt')
app.get('/productos',(req,res)=>{
    data.getAll()
    .then((data)=>{
        res.send(data);
    })
    
})
app.get('/productoRandom',(req,res)=>{
    data.getRandom()
    .then((data)=>{
        res.send(data);
    })
    
})
const PORT = 8080;

const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})
server.on("error",err=>console.log(`Error en el servidor: ${err}`))