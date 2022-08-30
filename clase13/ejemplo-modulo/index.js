import Modelo from './lib/index.js'
export default class Vehiculo extends Modelo{
    constructor(name,year,modelo){
        super(modelo)
        this.name=name;
        this.year=year
    }
    mostrarDatos(){
        return `Año: ${this.year} Nombre:${this.name} Modelo:${this.modelo}`
    }
}

let vehiculo = new Vehiculo("Auto","2022","Orlando")
console.log(vehiculo.mostrarDatos());



