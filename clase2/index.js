function sumar(a,b){
    return a+b
}
console.log(sumar(23,25));
console.log(sumar(23,2));
console.log(sumar(213,25));
console.log(sumar(23,235));

//funciones flechas
const restar=(a,b)=>a-b;
console.log(restar(7,8));
console.log(restar(70,8));
console.log(restar(67,8));
console.log(restar(47,8));

const operacion=(a,b,o)=>{
    if(o=='+'){
        return a + b
    }else if(o=='-'){
        return a-b
    }

}
console.log(operacion(23,45,'+'));
console.log(operacion(23,45,'-'));
const saludo=(nombre)=>{
    return `Hola ${nombre}
     cómo te va?`
}
console.log(saludo('Juan'));
console.log(saludo('Pedro'));
console.log(saludo('Luis'));