class Contador{
    static cuentaGlobal=0;
    constructor(responsable){
        this.responsable=responsable;
        this.cuentaIndividual=0;
    }
    getResponsable(){
        return this.responsable;
    }
    getCuentaIndividual(){
        return this.cuentaIndividual;
    }
    getCuentaGlobal(){
        return Contador.cuentaGlobal;
    }
    contar(){
        this.cuentaIndividual++;
         Contador.cuentaGlobal++;
    }
}
const r1 = new Contador('Juan')
const r2 = new Contador('Pedro')

r1.contar()
r1.contar()
r1.contar()

r2.contar()
r2.contar()
r2.contar()
r2.contar()

console.log(`r1 ind: ${r1.getCuentaIndividual()}`);
console.log(`r1 gobal: ${r1.getCuentaGlobal()}`);

console.log(`r2 ind: ${r2.getCuentaIndividual()}`);
console.log(`r2 gobal: ${r2.getCuentaGlobal()}`);