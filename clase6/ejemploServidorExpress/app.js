const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('home');
})
app.get('/usuarios',(req,res)=>{
    res.send(req.query);
})
app.post('/usuarios',(req,res)=>{
    res.send(req.query);
})
const PORT = 8080;

const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})
server.on("error",err=>console.log(`Error en el servidor: ${err}`))