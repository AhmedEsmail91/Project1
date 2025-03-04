import express from 'express';
import {addNote, allNotes, deleteNote, getNotes, updateNote} from './note.controller.js';
import validation from '../../middlewares/validation.js';
import { noteValidation } from './note.validation.js';
import { Authenticate } from '../../middlewares/auth.js';
const noteRouter=express.Router();

noteRouter.get('/',Authenticate,allNotes);
noteRouter.get('/userNotes',Authenticate,getNotes);
noteRouter.post('/',Authenticate,validation(noteValidation),addNote);
noteRouter.put('/:id',Authenticate,updateNote);
noteRouter.delete('/:id',Authenticate,deleteNote);
export default noteRouter; 