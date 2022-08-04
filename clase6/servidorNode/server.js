const http = require('http')

const server = http.createServer((request,response)=>{
if(request.method=="GET"){
       response.end('Hola Mundo! usando el método get');
    }else if(request.method=="POST"){
        response.end('Hola Mundo! usando el método post');
     }
 
})
const PORT = 3001
const connectedServer = server.listen(PORT,()=>{
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})
