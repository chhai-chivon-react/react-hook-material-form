import Joi from "joi-browser";

const SignUpFormValidator = (obj) => {
  const schema = {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  };
  return Joi.validate(obj, schema);
};

export { SignUpFormValidator };
