const fs = require('fs')
const computadora = {
    color:"blanca",
    dd:'160gb',
    marca:'HP',
    encender:function(){
        //mostrar interfaz
    },
    apagar:()=>{

    }

}
// computadora.color//propiedad
// computadora.apagar()//método

const info ={
    contString:'',
    contObj:{},
    tam:0
}
fs.readFile('./package.json','utf-8',(error,contenido)=>{
    if(error){
        return error
    }else{
        info.contString=contenido;
        info.contObj=JSON.parse(contenido)
        console.log(info);
    }
})
console.log(JSON.stringify(computadora));
console.log(__dirname);


