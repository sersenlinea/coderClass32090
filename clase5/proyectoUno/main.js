let nombres = ["Pedro","Pablo","Dionisio","Juan","Luis","Julián"];
const mostrarNombres=()=>{
    return Math.floor(Math.random()*nombres.length)
}

for (let i = 0; i < 20; i++) {
    console.log(nombres[mostrarNombres()]);
}
