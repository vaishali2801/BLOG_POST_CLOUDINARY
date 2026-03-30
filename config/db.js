
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
import mongoose  from "mongoose";

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully.....!");
    } catch (error) {
        console.log("mongoDB connection Failed:",error.message)
        process.exit(1)
    }
}
export default connectDB;