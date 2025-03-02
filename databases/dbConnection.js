import mongoose from "mongoose";
import chalck from "chalk";
import dotenv from "dotenv";
dotenv.config();
export default function dbConnection(){
    // mongoose.set('strictQuery', true);// this is to avoid the warning of deprication.
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log(chalck.blue("Connected to MongoDB"));
    }).catch((err)=>{
        console.log('Error:',err);
    });
}