import jwt from "jsonwebtoken";
export const Authenticate=async (req,res,next)=>{
    if(req.cookies.token){
        const token=req.cookies.token;
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        user=decoded;

        return next();
    }
    res.status(401).json({message:"Unauthorized"});
};