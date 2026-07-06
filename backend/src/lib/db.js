import mongoose from "mongoose";

//here we will make a connection for mongoDB

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("ERROR: MongoUri is required");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log("MongoDB Connected: ", conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection ERROR ", error.message);
        process.exit(1);
        //1:- means failed, 0:- means successful
    }
};

