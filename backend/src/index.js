import express, { application } from "express";
import "dotenv/config";

import { clerkMiddleware } from "@clerk/express";
import cors from "cors";    //CORS:- Cross Orign Resource Sharing - its a security rule

import fs from "fs";
import path from "path";


import { connect } from "mongoose";

import clerkWebhook from "./webhooks/clerk.webhook.js";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import job from "./lib/cron.js";
import { json } from "stream/consumers";
import { type } from "os";

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

const publicDir = path.join(process.cwd(), "public");

//it's important to keep the webhook event data in raw format, it shouldn't be in the raw format
app.use("/api/webhooks/clerk", express.raw({type: "application/json"}) ,clerkWebhook);

//middlewares....
app.use(express.json());    //for reading the input data (req.body.image,text,video).. its a bodyParser
app.use(clerkMiddleware()); //responsible for the authentication part
app.use(cors({origin: FRONTEND_URL, credentials: true}));    
//CORS:-  browser security rule: dont allow other outer api making req to your server and vice versa

app.get('/health', (req, res) => {
    res.status(200).json({ok:true});
});

//if public directory exists, serves the static file (Ye code React frontend ko Express server se serve karne ke liye hai)
//this is for the production build
if (fs.existsSync(publicDir)){
    app.use(express.static(publicDir));

    app.get("/{*any}", (req, res, next) => {
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
    });
}
//info: concept of the above code:- Production me React build (index.html, JS, CSS) ko Express serve karta hai. Agar user kisi React route (/chat, /profile) par directly aaye, to Express hamesha index.html bhejta hai aur baaki routing React Router sambhalta hai.

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on Port: http://localhost:${PORT}`);

    //cron job to send check request so that render doesnt goes offline and our site never downs
    if(process.env.NODE_ENV === "production") job.start();
});
 