import mongoose from "mongoose";
import chalck from "chalk";
import dotenv from "dotenv";
dotenv.config();
export default function dbConnection(){
    // mongoose.set('strictQuery', true);// this is to avoid the warning of deprication.
    mongoose.connect("mongodb+srv://ahmedesmail9102:jP1gCvm36IpBRD19@cluster0.0omyp.mongodb.net/hosting").then(()=>{
        console.log(chalck.blue("Connected to MongoDB"));
    }).catch((err)=>{
        console.log('Error:',err);
    });
}