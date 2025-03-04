import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST']
    },
})


const userSocketMap = {}   // {userId: socketId}


export function getReceiverSocketID(receiverID){
    return userSocketMap[receiverID];
}


io.on('connection', (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != 'undefined') userSocketMap[userId] = socket.id;   // map the user id to the socket id.

    // io.emit() is used to send events to all the connected clients. The second argument is the data being passed, which can be accessed by the clients.
    // it will send all the user IDs that are connected to a particular socket.
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // socket.on() is used to listen to the events, and it can be used both on client side and server side.
    socket.on("disconnect", ()=>{
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

export {app, io, server};
