import { userModel } from "../../databases/models/user.model.js";

export const addUser=async (req,res,next)=>{
    const user = await userModel.insertOne({
        name: "John Doe",
        email: "ahmed@gmail.com"});
    res.json(user);
}
export const getUsers=async (req,res,next)=>{
    const users = await userModel.find({}, {name: 1,_id:0});
    res.json(users);
}
export const getUserById=async (req,res,next)=>{
    const user=await userModel.findById(req.params.id);
    res.json(user);
}
export const updateUser=async (req,res,next)=>{
    const user=await userModel.updateOne({_id:req.params.id},req.params.body);
    res.json(user);
};