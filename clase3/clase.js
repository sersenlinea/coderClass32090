// function sumar (a,b){
//     console.log('hola');
//     return a+b;
// }
// console.log(sumar(5,9));
// console.log(sumar(5,' hola'));

//funciones flechas
// const restar=(a,b)=>{
//     let result =a-b
//     return result
// };
// console.log(restar(7,3));
// console.log(restar('hola ',3));
//asignación de función a una variable

// const saludo=(nombre)=>`Hola, ${nombre}`
// const saludo=(nombre)=>console.log(nombre);
// console.log(saludo("Juan"));//undefined
// saludo("Juan");
const sumar =(a,b)=>a+b;

let num=67;
let num2=85;
let suma =sumar(num,num2);
console.log(`La suma de: ${num} y ${num2} es igual a: ${suma}`);

//varias instrucciones

const restar =(a,b)=>{
    let result = a-b;
    return `La resta de ${a} - ${b} es igual a: ${result}`
}
// console.log(restar(34,10));

const dobleDe = a =>a*2;
// console.log(`El doble de ${num} es: ${dobleDe(num)}`);

const msg =()=>{
    console.log('Hola');
}
// msg()

const getPersona =()=>({nombre:'Pedro',edad:40})
console.log(getPersona());

//ejemplo callback
const call =(mensajeParaLoguear)=>{
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`);
};
function escribirYLoguear(texto,callbackParaLoguear){
    console.log(texto);
    callbackParaLoguear('archivo escrito con éxito!')
}
escribirYLoguear('Hola mundo de los callbacks!',call)

//Promesas

function dividir(dividendo,divisor){
    return new Promise((resolve,reject)=>{
        if(divisor == 0){
            reject('No se puede dividir por cero')
        }else{
            resolve(dividendo/divisor)
        }
    })
}
dividir(10,0)
.then(resultado=>{
    console.log(`resultado: ${resultado}`);
})
.catch(error=>console.log(`error: ${error}`))
dividir(10,2)
.then(resultado=>{
    console.log(`resultado: ${resultado}`);
})
.catch(error=>console.log(`error: ${error}`))

Promise.resolve(30)
.then(x=>x+1)
.then(x=>x*2)
.then(x=>{
    if(x==22) throw 'Error'
    else return 80
})
.then(x=>30)
.then(x=>x/2)
.then(console.log)
.catch(console.log)


Promise.reject(130)
.then(x=>x+1)
.then(x=>x*2)
.then(x=>{
    if(x==22) throw 'Error'
    else return 80
})
.then(x=>30)
.then(x=>x/2)
.then(console.log)
.catch(console.log)
//sincrónica bloqueante
function funA(){
    console.log(1);
    funB()
    console.log(2);
}
function funB(){
    console.log(3);
    funC()
    console.log(4);
}
function funC(){
    console.log(5);
}
funA()
setTimeout(()=>{
    console.log('Hola ');
},1000)
let contador =0;
let time =setInterval(() => {
    contador++;
    console.log(contador);
    if(contador==5){
        clearInterval(time)
    }
}, 1000);
