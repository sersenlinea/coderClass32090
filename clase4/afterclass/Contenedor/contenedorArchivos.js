const {promises:fs} = require('fs')
class Contenedor {
    static newId=0;//contenedor de memoria
    constructor(ruta){
        this.ruta=ruta;

    }
    async guardar(obj){
        let objs = await this.capturarTodo();
        if(objs.length == 0){
            Contenedor.newId=1;
        }else{
            Contenedor.newId++;
        }
        obj={id:Date.now(),...obj}//milisegundos 1/01/1971
        // {nombre:"Luis",apellido:"Navas"}
        let datos = [...objs,obj]
        try {
            await fs.writeFile(this.ruta,JSON.stringify(datos,null,2))
        } catch (error) {
            throw new Error(`Error al guardar los datos ${error}`)
        }
    }
    async capturarPorId(id){
        let objs = await this.capturarTodo();
        let obj = objs.filter(o=>o.id==id)
        if(obj.length==0){
            return `No se puede obtener el dato con el id: ${id}`
        }
        return obj
    }
    async capturarTodo(){
        try {
            const objs = await fs.readFile(this.ruta)
            return JSON.parse(objs)
        } catch (error) {
            return []
        }
    }
    async modificarDatos(id,obj){
        
    }
    async eliminarUno(id){
        let objs = await this.capturarTodo();
        let obj = objs.filter(o=>o.id!=id)
        try {
            await fs.writeFile(this.ruta,JSON.stringify(obj,null,2))
        } catch (error) {
            return `No se puede borrar ese registro`
        }
        
    }
    async eliminarTodo(){
        try {
            await fs.writeFile(this.ruta,JSON.stringify([],null,2))
        } catch (error) {
            return `No se pueden borrar los datos`
        }
    } 

}

let alumno = new Contenedor('./alumnos.json')
alumno.guardar({name:"Juana",lastName:"Oropeza"})
setTimeout(()=>{
    // console.log(alumno.capturarTodo());
    // console.log(alumno.capturarPorId(1));
},8000)
// alumno.capturarTodo()
// .then((data)=>console.log(data))
// .catch((err=>console.log(err)))
// alumno.eliminarUno(2)
// .then((data)=>console.log("se eliminó el registro!"))
// .catch((err=>console.log(err)))

 

