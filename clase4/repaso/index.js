function hacerTarea(num, cb){
    console.log('haciendo la tarea');
    setTimeout(cb,1000)
}
console.log('inicio de tareas');
hacerTarea(1,()=>{
    hacerTarea(2,()=>{
       hacerTarea(3,()=>{
        hacerTarea(4,()=>{
            console.log('fin de la tarea');
        })
       }) 
    })
})
console.log('otras tareas ...');

// setTimeout(()=>{},1000) estructura 
let contador =0;
const timer = setInterval(()=>{
    contador++
    console.log(`mi contador es: ${contador}`);
    if(contador==5){
        console.log('Finaliza el contador');
        clearInterval(timer)
    }
},1000)