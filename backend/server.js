import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { mongoConnect } from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// middlewares
app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()) // to access the cookies in the route handlers

// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

server.listen(PORT, ()=>{
    //connect to MongoDB
    mongoConnect();
    console.log(`Server running on port ${PORT}`);
});
