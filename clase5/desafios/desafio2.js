const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const getNombres=()=>{
    return productos.map(producto=>producto.nombre).join(', ')
}
const getPreciosTotal=()=>{
    let total=0;
    productos.forEach(p=>total+=p.precio)
    return total;
}
const precioPromedio=()=>{
    return getPreciosTotal() / productos.length

}
const getProduPrecioMenor=()=>{
    let min =productos[0].precio;
    let prod =productos[0].nombre;
    for (const producto of productos) {
        if(producto.precio < min){
            min = producto.precio;
            prod = producto.nombre;
        }
    }
    return {producto:prod,precio:min}
    // return prod
}

const getProduPrecioMayor=()=>{
    let min =productos[0].precio;
    let prod =productos[0].nombre;
    for (const producto of productos) {
        if(producto.precio > min){
            min = producto.precio;
            prod = producto.nombre;
        }
    }
    return {producto:prod,precio:min}
    // return prod
}
function to2decimales(valor){
    return Number(valor.toFixed(2))
}
let info={
    nombres:getNombres(),
    total:to2decimales(getPreciosTotal()),
    promedio:to2decimales(precioPromedio()),
    'producto con el precio minimo':getProduPrecioMenor(),
    maximo:getProduPrecioMayor()
}
console.log(info);
const fs = require('fs')
console.log(fs);
