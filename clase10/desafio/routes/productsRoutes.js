const express = require('express')
const router = express.Router();
let id=3;
let listaProductos=[
    {id:1 ,title:"tv 32", price:12000,img:"https://medias.musimundo.com/medias/00543026-146105-146105-01-146105-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2Nzk4NnxpbWFnZS9qcGVnfGhkZi9oODMvMTAzOTA2OTM0MTI4OTQvMDA1NDMwMjYtMTQ2MTA1LTE0NjEwNV8wMS0xNDYxMDVfMDEuanBnX3NpemU1MTV8MzA0YjBkYjBiYTIwMzViNGI2OWNhMWFhNWM3NDMxOTA1ODg1N2RiNTA5NzE2MjhkZjRjODUxNWYzM2RkOTIwMA"},
    {id:2 ,title:"tv 32", price:12000,img:"https://medias.musimundo.com/medias/00543026-146105-146105-01-146105-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2Nzk4NnxpbWFnZS9qcGVnfGhkZi9oODMvMTAzOTA2OTM0MTI4OTQvMDA1NDMwMjYtMTQ2MTA1LTE0NjEwNV8wMS0xNDYxMDVfMDEuanBnX3NpemU1MTV8MzA0YjBkYjBiYTIwMzViNGI2OWNhMWFhNWM3NDMxOTA1ODg1N2RiNTA5NzE2MjhkZjRjODUxNWYzM2RkOTIwMA"},
    {id:3 ,title:"tv 32", price:12000,img:"https://medias.musimundo.com/medias/00543026-146105-146105-01-146105-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2Nzk4NnxpbWFnZS9qcGVnfGhkZi9oODMvMTAzOTA2OTM0MTI4OTQvMDA1NDMwMjYtMTQ2MTA1LTE0NjEwNV8wMS0xNDYxMDVfMDEuanBnX3NpemU1MTV8MzA0YjBkYjBiYTIwMzViNGI2OWNhMWFhNWM3NDMxOTA1ODg1N2RiNTA5NzE2MjhkZjRjODUxNWYzM2RkOTIwMA"}
]

router.get('/mostrarproductos',(req,res)=>{
    res.render('productos',{productos:listaProductos})
})
router.get('/agregarProducto',(req,res)=>{
    res.render('agregarProducto')
})
//ruta parametrizada
router.get('/detalle/:id',(req,res)=>{
    let id = req.params.id;
    let miProducto = listaProductos.filter(p=>p.id == id);
    if(miProducto.length ==0){
        return res.send(`no existe ese producto`)
    }
    res.send(miProducto)
})
router.post('/',(req,res)=>{
    let datos = req.body;
    datos.id=id++;
    listaProductos=[...listaProductos,datos]
    //almacenar los datos
    res.redirect('/productos/agregarProducto');
})
module.exports = router;