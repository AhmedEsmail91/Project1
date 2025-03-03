import Joi from 'joi'
export const noteValidation = Joi.object({
    title:Joi.string().min(3).max(30).required(),
    description:Joi.string().min(3).max(100).required(),
});