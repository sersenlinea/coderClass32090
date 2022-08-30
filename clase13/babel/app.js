const lista = [4,3,9,5,90]

lista.map(x=>x*x).forEach(x=>console.log(x))
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido
    }
    mostrarNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}
let luis = new Persona("Luis","Navas")
console.log(luis.mostrarNombreCompleto());