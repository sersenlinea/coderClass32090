const fs = require('fs')
const guaradarDatos=(ruta,info)=>{
    // fs.writeFileSync(ruta,info);//sobreescribir archivo
    fs.appendFileSync(ruta,info)
}
const mostrarDatos=(ruta,cod)=>{
    let info =fs.readFileSync(ruta,cod)
    console.log(info);
}
const deleteInfo=(ruta)=>{
    fs.unlinkSync(ruta)
    console.log('se borró el archivo '+ruta);
}
guaradarDatos('prueba.txt','Esta info es de prueba')
guaradarDatos('prueba.txt','Esta info es de prueba')
guaradarDatos('prueba.txt','Esta info es de prueba')
guaradarDatos('prueba.txt','Esta info es de prueba')
mostrarDatos('prueba.txt','utf-8')
deleteInfo('prueba.txt')
try {
    fs.mkdirSync('../directorioPrueba')
} catch (error) {
    console.log(error);
}

guaradarDatos('../directorioPrueba/prueba.txt','Esta info es de prueba')

