const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
let messages = [
    {author:"Juan",text:"Hola ¿Qué tal?"},
    {author:"Pedro",text:"Muy Bien y vos?"},
    {author:"Ana",text:"Geinal!"}
]

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
})

const server = httpServer.listen(8080,()=>{
    console.log(`El servidor está escuchando por el puerto 8080`);
})
server.on('error',(err)=>{
    console.log(err);
})
io.on('connection',(socket)=>{
    console.log('se conecto un cliente');
    //para enviar 
    socket.emit('messages',messages)

    socket.on('new-message',(data)=>{
        // messages.push(data);
        messages=[...messages,data]
        io.sockets.emit('messages',messages)
    })
    
})