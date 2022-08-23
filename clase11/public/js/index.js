const socket = io()
socket.on('mensajes',(data)=>{
    console.log(data);
    document.getElementById('mgs').innerHTML=data
});
socket.on('respuestaServer',(data)=>{
    alert(data.msg)
    document.getElementById('btn').addEventListener('click',()=>{
        let msg =document.getElementById('mensaje').value;
        socket.emit('respuesta',msg)
    })
    
})
socket.on('notificacion',(data)=>{
    data.map(m=>document.getElementById('mgs').innerHTML+=`<p>${m}</p>`)
})

