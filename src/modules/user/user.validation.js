import Joi from 'joi';
export const signupValidation = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Name should be a type of text',
        'string.empty': 'Name cannot be an empty field',
        'string.min': 'Name should have a minimum length of {#limit}',
        'string.max': 'Name should have a maximum length of {#limit}',
        'any.required': 'Name is a required field'
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a type of text',
        'string.empty': 'Email cannot be an empty field',
        'string.email': 'Email must be a valid email',
        'any.required': 'Email is a required field'
    }),
    password: Joi.string().min(6).max(30).regex(/^[a-zA-Z0-9]{3,30}$/).required().messages({
        'string.pattern.base': 'Password must contain only alphanumeric characters',
        'any.required': 'Password is a required field'
    })
});
export const signinValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required()
});