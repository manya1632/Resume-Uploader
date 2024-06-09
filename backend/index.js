import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors" ;
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
import upload from "./middleware/upload-middleware.js";

const PORT=process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();
app.use(express.json());
app.use(cors());



app.use("/api/user",userRoutes);

connectDb(DB_URL)
app.listen(PORT);