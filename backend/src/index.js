import express from "express";
import "dotenv/config";

import { clerkMiddleware } from "@clerk/express";
import cors from "cors";    //CORS:- Cross Orign Resource Sharing - its a security rule


import { connect } from "mongoose";

import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

//middlewares....
app.use(express.json());    //for reading the input data (req.body.image,text,video).. its a bodyParser
app.use(clerkMiddleware()); //responsible for the authentication part
app.use(cors({origin: FRONTEND_URL, credentials: true}));    
//CORS:-  browser security rule: dont allow other outer api making req to your server and vice versa

app.get('/health', (req, res) => {
    res.status(200).json({ok:true});
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on Port: http://localhost:${PORT}`);
});
 