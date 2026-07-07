import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";

//this middleware checks if the user is authenticated or not before any action or req send by the user
export async function protectRoute(req, res, next) {
    try {
        const {userId} = getAuth(req);

        if(!userId){
            res.status(401).json({message: "Unauthorized"});
            return;
        }

        const user = await User.findOne({clerkId: userId});

        if(!user){
            res.status(404).json({message: "User profile is not synced yet"});
            return;
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Error in protectRoute Middleware: ", error.message);
    }
};