import {addUser,getUsers,getUserById,updateUser} from './user.controller.js';
import express from 'express';
const router=express.Router();
router.get('/users',getUsers);
router.post('/add-user',addUser);
router.get('/users/:id',getUserById);
router.put('/users/:id',updateUser);

export default router;