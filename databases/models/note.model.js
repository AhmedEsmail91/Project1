import mongoose from "mongoose";
const NoteSchema = mongoose.Schema({
    title: String,
    description: String,
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:'User'}, 
});
export const noteModel = mongoose.model("note", NoteSchema);