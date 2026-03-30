import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import cors from "cors"
import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";
import blogRoutes from "./routes/blogRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/blog", blogRoutes);
const port = process.env.PORT || 500;
//server
app.get("/", (req, res) => {
    res.status(200).json("Hello from sever....!");
});
//undefined route
app.use((req, res, next) => {
    next(new HttpError("Requested routes not found", 404));
});
//centralized error handling 
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({success: false,message: error.message || "Internal Server Error",});
});
//start server 
async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`server listing on port ${port}`);
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
//call
startServer();