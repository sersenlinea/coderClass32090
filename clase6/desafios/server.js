const http = require('http')

const getMensaje=()=>{
    const hora = new Date().getHours()
    if (hora >= 6 && hora <=12) {
        return 'Buenos días'
    } else if(hora >= 13 && hora <=19){
        return 'Buenas tardes'
    }else if(hora >= 20 && hora <=23 || hora >= 0 && hora <=5){
        return 'Buenas tardes'
    }
}
const server = http.createServer((request,response)=>{
if(request.method=="GET"){
       response.end(getMensaje());
    }else if(request.method=="POST"){
        response.end('Hola Mundo! usando el método post');
     }
 
})
const PORT = 3001
const connectedServer = server.listen(PORT,()=>{
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})