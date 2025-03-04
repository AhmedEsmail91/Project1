import {noteModel} from '../../../databases/models/note.model.js';
export const allNotes=async(req,res,next)=>{
    const notes=await noteModel.find().populate('createdBy','-_id');
    
    res.json(notes);
}

export const getNotes=async(req,res,next)=>{
    const notes=await noteModel.find({createdBy:req.user._id});
    res.json(notes);
}

export const addNote = async (req, res, next) => {
    const {title,description} = req.body;
    const note = await noteModel.insertOne(
        {title,description,createdBy:req.user._id}
    );
    res.json(note);
};

export const updateNote = async (req, res, next) => {
    // res.json({message:"success"});
    const {title,description}=req.body;
    const note = await noteModel.findByIdAndUpdate(req.params.id, {title,description}, { new: true });
    res.json({message:"success",note});
}
    
export const deleteNote = async (req, res, next) => {
    const note=await noteModel.findByIdAndDelete(req.params.id);
    if(!note){
        return res.status(404).json({message:"note not found"});
    }
    res.json({message:"success",note});
}