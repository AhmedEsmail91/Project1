import {addUser,getUsers,getUserById,updateUser} from './user.controller.js';
import express from 'express';
const router=express.Router();
router.get('/',getUsers);
router.post('/add-user',addUser);
router.get('/:id',getUserById);
router.put('/:id',updateUser);

export default router;