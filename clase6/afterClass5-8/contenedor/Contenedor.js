const {promises:fs} = require('fs')
class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }
    async getAll(){
        try {
            let datos = await fs.readFile(this.ruta,'utf-8')
            return datos
        } catch (error) {
            console.log('no hay datos');
            return []
        }
    }
    async getRandom(){
        try {
            let datos =await this.getAll()
            let jsonData = JSON.parse(datos);
            let numRandom = Math.floor(Math.random()*jsonData.length)
     
            return jsonData[numRandom]
        } catch (error) {
            
        }
        
    }
}
module.exports = Contenedor