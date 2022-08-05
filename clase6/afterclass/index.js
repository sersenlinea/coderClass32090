const express = require('express')
const app = express()
const Contenedor = require('./contenedor/Contenedor')
const contenedor = new Contenedor('./productos.txt')
const PORT=8080
//end point productos

app.get('/',(req,res)=>{
    //manejar las peticiones y las respuestas
    contenedor.getAll()
    .then(data=>res.send(data))
    
})

//end point prodRandom
app.get('/prodRandom',(req,res)=>{
    contenedor.getRandom()
    .then((data)=>{
        res.send(data)
    })
    
})
const server = app.listen(PORT,()=>{
    console.log(`Se está escuchando por el puerto ${PORT}`);
})
server.on("error",err=>console.log(`Error en el servidor: ${err}`))

