import Joi from "joi";

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  cpf: Joi.string().required(),
  birthday: Joi.string().required(),
  phone: Joi.string().required(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  complement: Joi.string().required(),
  state: Joi.string().required(),
  number: Joi.number().required(),
  cep: Joi.string().required(),
  avatar: Joi.string().required(),
});
