/*console.log('Esta es una prueba del CLI');
console.log(123455);
console.log([2,5,6,7,8,9]);
console.log({nombre:"Luis",apellido:"navas"});
console.log("Esta es una cadena de texto")*/
//console.log(25 + 3);//numerico
//console.log(45 < 789);//boolean /*Multilinea*/
//maneras de crear variables
//declaración de la variable

let numero = 0;
console.log(numero); 
numero=56;
console.log(numero); 
numero="cuatro"
console.log(numero); 
if (numero == 'tres') {
    let numero2=30;
    numero = numero2
}
// console.log(numero2);//no se encuentra el numero2 scope del if
console.log(numero); 

let i = 0; //scope global
function numbers(){
    i=1;
    let j = 2;//scope local
    if(true){
        console.log(i);
        console.log(j);
        let k = "Hola"
    }
    //console.log(k);//no se encuentra dentro del scope
}
numbers();
// console.log(j);//no se encuentra dentro del scope

const numero3 =90;
// numero3=89;

const numeros4 =[7,9,6,7];
numeros4[30]=67;
console.log(numeros4);
// numeros4=[7,9,0,0]
// console.log(numeros4);
const alumno ={nombre:"Julián",apellido:"Gonzalez"}
console.log(alumno);
alumno.edad=49
console.log(alumno);


//desafío generico
let nombre = "pepe"
let edad = 25
let precio = "$100"
let series = ["dark","mr robot","Castlevenia"]
let peliculas = {pelicula: "poseidon",estreno:"2010",protagonista:"dicaprio"}

console.log(nombre)
console.log(edad)
console.log(precio)
console.log(series)
console.log(peliculas.estreno)
console.log(edad+1)
series.push("peaky blinders")
console.log(series)
