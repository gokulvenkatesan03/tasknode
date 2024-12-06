import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRoute from './Routers/recipeRouter.js';
import connectDB from './Database/dbConfig.js';

//dotenv config
dotenv.config();

//express declaration
const app = express();

//req.body
app.use(express.json());

//cors 
app.use(cors());

//connectDB
connectDB();

//default route
app.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome to Recipes API"});
})

//default
app.use("/api/recipes",recipeRoute);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server was Started Successfully");
})
