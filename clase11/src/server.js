const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
let mensajes = []
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
    console.log(socket.id);
    socket.emit('mensajes',' Hola la comunicación está establecida!')
    socket.emit('respuestaServer',{msg:"Hola buen día"})
    socket.on('respuesta',(data)=>{
        mensajes.push(data);
        console.log(mensajes);
        io.sockets.emit('notificacion',mensajes)
    })
})