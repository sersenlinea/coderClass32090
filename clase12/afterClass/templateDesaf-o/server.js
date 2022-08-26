const app = require('./app.js')
const PORT =  process.env.PORT || 8080;
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const products = require('./src/contenedor')
let messages = [
  {date:"25/8/2022 23:32:03 ",
  author:"Juan",text:"Hola ¿Qué tal?"},
  {date:"25/8/2022 23:32:03 ",
  author:"Pedro",text:"Muy Bien y vos?"},
  {date:"25/8/2022 23:32:03 ",
  author:"Ana",text:"Geinal!"}
]
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  });

server.on('error', (error) => console.error(`Error en Servidor ${error}`));

server.on('error',(err)=>{
  console.log(err);
})
io.on('connection',(socket)=>{
  console.log('se conecto un cliente');
  //para enviar 
  socket.emit('messages',{messages,products:products.getAll()})

  socket.on('new-message',(data)=>{
      // messages.push(data);
      messages=[...messages,data]
      // console.log(products.getAll());
      console.log(messages);
      let todo ={messages:messages,products:products.getAll()}
      io.sockets.emit('messages',todo)
  })
  socket.on('new-product',(data)=>{
    console.log(data);
    products.save(data);
    console.log(products.getAll());
      let todo ={messages:messages,products:products.getAll()}
    io.sockets.emit('messages',todo)
  })
  
})