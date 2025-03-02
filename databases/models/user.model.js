import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const UserSchema=new mongoose.Schema({
    name: {
        type:String,trim:true,required:true
    },
    email: {type:String,RegExp:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,required:true,unique:true},
    password: {type:String,required:true,default:"123456"},
},{timestamps:true});

//mongooose middleware.
UserSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,10);
    next();
});

export const userModel=mongoose.model("user",UserSchema);