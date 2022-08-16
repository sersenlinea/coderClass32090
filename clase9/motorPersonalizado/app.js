const express = require('express')
const {promises:fs} = require('fs') 
const app = express()

app.engine('cte',async(filePath,options,callback)=>{
    try {
        const content = await fs.readFile(filePath)
        const rendered = content.toString()
        .replace('^^titulo$$',''+ options.titulo + '')
        return callback(null,rendered)
        
    } catch (error) {
        return callback(new Error(error)) 
    }
})
app.set('views', './view')
app.set('view engine', 'cte')
app.get('/',(req,res)=>{
    res.render('plantilla',{titulo:"Mi plantilla personalizada"})
})
app.listen(3000,()=>{
    console.log('puerto 3000');
})