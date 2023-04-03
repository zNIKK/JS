
const express = require('express');
const path = require('path');
const app = express();
const socketIo = require('socket.io');

app.use('/grupo1', express.static(path.resolve('./', 'public')));
app.use('/grupo2', express.static(path.resolve('./', 'public')));

const server = app.listen(3000, () => {
    console.log("Server Running");
})


const messages = { grupo1: [], grupo2: [] }

const io = socketIo(server);
app.set(socketIo, io);

const grupo1 = io.of('/grupo1').on('connection', (socket) => {
    console.log('new connection');
    socket.emit('update_messages', messages.grupo1)

    socket.on('new_message', (data) => {
        messages.grupo1.push(data);
        console.log(messages.grupo1);
        grupo1.emit('update_messages', messages.grupo1)
    })
})


const grupo2 = io.of('/grupo2').on('connection', (socket) => {
    console.log('new connection');
    socket.emit('update_messages', messages.grupo2)

    socket.on('new_message', (data) => {
        messages.grupo2.push(data);
        console.log(messages.grupo1);
        grupo2.emit('update_messages', messages.grupo2)
    })

})


// const grupo1 = io.of('/grupo1').on('connection', (socket) => {
//     console.log('new connection');
//     socket.emit('update_messages', messages.grupo1)

//     socket.on('new_message', (data) => {
//         messages.grupo1.push(data);
//         console.log(messages);
//         grupo1.emit('update_messages', messages)
//     })

// })