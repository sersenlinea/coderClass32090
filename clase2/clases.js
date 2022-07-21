class Cliente{
    constructor(nombre,fecha,direccion){
        this.nombre=nombre;
        this.fecha=fecha;
        this.direccion=direccion;
    }
    mostrarDatos(){
        return `Nombre : ${this.nombre} Dirección: ${this.direccion}`
    }
}

let miObject = new Cliente("Alejandro",'21-07-2022','Paraguay 230 Capital federal');
console.log(miObject.nombre);
let luis = new Cliente("Luis",'17-07-2022','Reconquista 375 capital Federal')
console.log(luis);
let juan = {nombre:"Juan",fecha:'17-07-2022'}
console.log(juan);
console.log(miObject.mostrarDatos());