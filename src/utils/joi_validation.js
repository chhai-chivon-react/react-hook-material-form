import Joi from "joi-browser";

const SignUpFormValidator = (obj) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).unknown(true);
  return Joi.validate(obj, schema);
};

export { SignUpFormValidator };
