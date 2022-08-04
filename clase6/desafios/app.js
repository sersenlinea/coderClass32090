const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1 style='color:blue'> Nivel 1 </h1>");
})
let visitas=0;
app.get('/visitas',(req,res)=>{
    visitas++;
    res.send(`La cantidad de visitas es: ${visitas}`);
})
app.get('/fyh',(req,res)=>{
    res.send({fyh:new Date().toLocaleString()});
})
const PORT = 8080;

const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})
server.on("error",err=>console.log(`Error en el servidor: ${err}`))