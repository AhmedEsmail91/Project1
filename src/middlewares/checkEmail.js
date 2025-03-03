import { userModel } from "../../databases/models/user.model.js";
export const checkEmail = async (req, res, next) => {
    const user=await userModel.find({email:req.body.email});
    if(user.length>0){
        res.status(400).json({message:"Email already exists"});
    }
    else{
        next();
    }
};