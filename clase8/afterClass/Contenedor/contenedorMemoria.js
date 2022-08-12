class ContenedorMemoria {
    miId=0;
    constructor(){
        this.productos=[];
    }
    getAll(){
        return this.productos;
    }
    getOne(id){
        console.log(Number(id));
        let obj = this.productos;
        let miObj = obj.filter(p=>p.id==Number(id))
       
        return miObj;
    }
    addOne(obj){
        obj.id=this.miId++
        this.productos=[...this.productos,obj]
    }
    updateOne(id,obj){
        this.productos.forEach(p=>{
            if(p.id==Number(id)){
                p=obj
            }
        })
        return this.productos;
    }
    deleteOne(id){
        let obj = this.productos.filter(p=>p.id != Number(id));
        this.productos=obj
        return obj
    }
}
module.exports = ContenedorMemoria