const express = require('express')

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/autos',(req,res)=>{
    res.json({mensaje:'Recibí una petición de tipo get'})
})

app.post('/api/autos',(req,res)=>{
    res.json({mensaje:'Recibí una petición de tipo post'})
})
app.get('/api/bicicletas',(req,res)=>{
    res.json({mensaje:'Recibí una petición de tipo get en bicicletas'})
})

app.post('/api/bicicletas',(req,res)=>{
    res.json({mensaje:'Recibí una petición de tipo post en bicicletas'})
})
const PORT = 3000

const server = app.listen(PORT,()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`);
})
server.on("error",error=>console.log(`Error en servidor ${error}`))
