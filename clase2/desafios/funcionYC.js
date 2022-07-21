function mostrarLista(...lista) {
    if (lista.length === 0) {
        console.log('Lista vacía')
    } else {
        console.log(lista)
    };
};
mostrarLista([4,6,8])
mostrarLista()
//Spreat operator
let alumnos =["Luis","Esteban"];
alumnos.push("Pedro");
alumnos=[...alumnos,"Catalina"]
alumnos=["Juan",...alumnos]
console.log(alumnos);
//2 ()()
(function(...lista){
    if (lista.length === 0) {
        console.log('Lista vacía')
    } else {
        console.log(lista)
    };
})();

//3

function crearMultiplicador (a){
    /*let multiplicacion = (a * b)
    let resultado = multiplicacion
    console.log(multiplicacion)
    */
   return (b)=>{
    return a*b;
   }
}
// crearMultiplicador (10, 2)

const duplicar=crearMultiplicador(2)

console.log(duplicar(3));
console.log(duplicar(7));

const triplicar=crearMultiplicador(3)

console.log(triplicar(5));