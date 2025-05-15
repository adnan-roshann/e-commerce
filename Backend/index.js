import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";



dotenv.config();

const port = process.env.PORT || 3002;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



connectDB();






app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});
