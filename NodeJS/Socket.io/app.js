const express = require('express');
const path = require('path');
const http = require('http')
const app = express();
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

// const server = app.listen(3000, ()=> {
//     console.log("SERVER RUNNING");
// })

const server = http.Server(app);

server.listen(3000, () => {
    console.log('SERVER RUNNING');
})

const io = socketIO(server)
const randoms = []
io.on('connection', (socket)=>{

    console.log("New connection");

    const random = Math.random()
    randoms.push(random);
    console.log(random);
    io.emit('hello_client_response', {msg: `Seja bem vindo! ${randoms}`}) // socket.emit() = manda a mensagem para um usuário só

    socket.on('hello_client_response', (data)=>{
        console.log(data.msg);
    })
})
