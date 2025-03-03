import {noteModel} from '../../../databases/models/note.model.js';
export const addNote = async (req, res, next) => {
    const note = await noteModel.insertOne(req.body);
    res.json(note);
};