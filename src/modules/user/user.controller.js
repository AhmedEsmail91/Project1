import { userModel } from "../../../databases/models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup=async (req,res,next)=>{
    if(req.cookies.token){
        return res.json({token:req.cookies.token});
    }
    const user = await userModel.insertOne(req.body);
    token=jwt.sign({user_id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY});
    res.cookie("token",token,{httpOnly:true});
    res.json(user);
};

export const signin=async (req,res,next)=>{
    // res.json({message:"Signin successful"});
    const user = await userModel.findOne({"email":req.body.email});
    if (!(user && bcrypt.compareSync(req.body.password, user.password))) {
        return res.status(400).json({message: "Invalid email or password"});
    }
    req.cookies.token&&res.json({token: req.cookies.token});
    if(!req.cookies.token){
        const token = jwt.sign({user_id:user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY});
        res.cookie('token', token, { httpOnly: true });
        res.json({token});
    }
};
export const signout=async (req,res,next)=>{
    res.clearCookie('token');
    res.json({message:"Signout successful"});
}
export const addUser=async (req,res,next)=>{
    const {name,email,password}=req.body;
    const user = await userModel.insertOne({name,email,password});
    res.json(user);
}
export const getUsers=async (req,res,next)=>{
    const users = await userModel.find();
    res.json(users);
}
export const getUserById=async (req,res,next)=>{
    const user=await userModel.findOne({_id: req.params.id}).populate('notes');
    res.json(user);
}
export const updateUser=async (req,res,next)=>{
    const user=await userModel.updateOne({_id:req.params.id},req.params.body);
    res.json(user);
};