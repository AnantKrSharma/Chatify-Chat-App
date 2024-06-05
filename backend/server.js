import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { mongoConnect } from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()) // to access the cookies in the route handlers


// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, ()=>{
    //connect to MongoDB
    mongoConnect();
    console.log(`Server running on port ${PORT}`);
});
