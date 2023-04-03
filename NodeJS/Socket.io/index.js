const express = require('express');
const path = require('path');
const http = require('http')
const app = express();
// permite a comunicação bidirecional em tempo real entre clientes e servidores da Web. Ele consiste em duas partes: uma biblioteca do lado do cliente que é executada no navegador e uma biblioteca do lado do servidor para Node.js.
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

//quando acontecer a requisição ele vai mandar um New connection
io.on('connection', (socket)=>{

    console.log("New connection");

    const random = Math.floor(Math.random() * 100)
    randoms.push(random);
    console.log(random);
    // io = gerencia TODOS os sockets
    io.emit('hello_client_response', {msg: `Seja bem vindo! ${randoms}`}) // socket.emit() = manda a mensagem para um usuário só
    // se a gente receber a mensagem hello_client_response posso fazer algo
    //socket = gerencia um socket especifico desse server
    socket.on('hello_client_response', (data)=>{
        console.log(data.msg);
    })
    // mandar para todos os sockets a mensagem menos para o usuário que solicitou a requisição
    socket.broadcast.emit('hello', {msg: `Chegou um novo usuário`})
})
