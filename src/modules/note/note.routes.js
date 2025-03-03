import express from 'express';
import {addNote} from './note.controller.js';
import validation from '../../middlewares/validation.js';
import { noteValidation } from './note.validation.js';
import { Authenticate } from '../../middlewares/auth.js';
const noteRouter=express.Router();

noteRouter.post('/',Authenticate,validation(noteValidation),addNote);


export default noteRouter;