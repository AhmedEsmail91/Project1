import jwt from "jsonwebtoken";
import { userModel } from "../../databases/models/user.model.js";
export const Authenticate=async (req,res,next)=>{
    if(req.cookies.token){
        const token=req.cookies.token;
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const {user_id}=decoded;
        req.user=await userModel.findById(user_id);
        return next();
    }
    res.status(401).json({message:"Unauthorized"});
};