const fs = require('fs')
try {
    fs.writeFileSync('fyh.txt',new Date().toLocaleString())
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}
try {
    const contenido = fs.readFileSync('fyh.txt','utf-8')
    console.log(contenido);
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}
fs.readdir('../../clase4',(error,nombres)=>{
   if(error){ console.log(error)}
   else{
    console.log(nombres);
   }
})
const leerArchivo= async()=>{
    try {
        let datos =await fs.promises.readFile('fyh.txt','utf-8')
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
   
}
leerArchivo()