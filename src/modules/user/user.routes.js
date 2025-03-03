import { checkEmail } from '../../middlewares/checkEmail.js';
import { hashPassword } from '../../middlewares/hashPassword.js';
import validation from '../../middlewares/validation.js';
import {addUser,getUsers,getUserById,updateUser,signup, signin, signout} from './user.controller.js';
import {signupValidation,signinValidation} from './user.validation.js';
import express from 'express';

// Create two routers: AuthRouter and UserRouter
// AuthRouter contains the following routes:
const AuthRouter=express.Router();

AuthRouter.post('/register',validation(signupValidation),hashPassword,checkEmail,signup);
AuthRouter.post('/login',validation(signinValidation),signin);
AuthRouter.post('/signout',signout);

// UserRouter contains the following routes:
const UserRouter=express.Router();

UserRouter.get('/',getUsers);
UserRouter.post('/create',addUser);
UserRouter.get('/:id',getUserById);
UserRouter.put('/update/:id',updateUser);

export {AuthRouter,UserRouter}; 