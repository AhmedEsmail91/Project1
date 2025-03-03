import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const UserSchema=new mongoose.Schema({
    name: {
        type:String,trim:true
    },
    email: {type:String,RegExp:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,unique:true},
    password: {type:String,default:"123456"},
    role: {type:String,enum:['admin','user'],default:'user'},
},{timestamps:true});

//mongooose middleware.
// UserSchema.pre("save",async function(next){
//     this.password=await bcrypt.hash(this.password,10);
//     next();
// });

export const userModel=mongoose.model("user",UserSchema);