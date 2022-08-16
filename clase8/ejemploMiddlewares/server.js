const express = require('express')
const app = express()

//ejemplo de mid de aplicación
// app.use((req,res,next)=>{
//     if(req.method == 'POST'){
//         sendMail('admin@gmail.com')
//     }
//     db.insert({
//         fecha:new Date,
//         metodo:req.method
//     })
// })

app.use((req,res,next)=>{
    if(req.url.split().includes('@')){
        res.status(400).json({msg:'ruta invalida'})
    }
    else{
        next()
    }
})
//rutas
const router = express.Router();

router.use((req,res,next)=>{
    console.log('acaba de llegar una petición');
    next();
})
router.use((req,res,next)=>{
    console.log(`metodo: ${req.method} - url ${req.url}`);
    next()
})
router.use((req,res,next)=>{
    req.regalito ={hola:'chau'}
    next()
})
router.get('/',(req,res,next)=>{
    res.send('ok')
})
function miMiddleware(req,res,next){
    console.log('Un middleware especial');
    // next();
}
router.get('/h', miMiddleware,(req,res)=>{
    res.send('ok h')
})
const PORT = 8080
const server=app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`);
})
server.on('error',error=>console.log(`Error en el servidor ${error}`))