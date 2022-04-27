import express from "express";
//import apolloServer from 'apollo-server-express';
import connectDB from './mongo/connectDB.js';
connectDB.connectDB();

const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Chạy trên cổng [" + PORT + "]"));

