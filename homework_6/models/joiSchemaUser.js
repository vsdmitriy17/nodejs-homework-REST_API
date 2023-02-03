const Joi = require("joi");

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // регулярний вираз email

const registerSchema = Joi.object({ // бібліотека для перевірки - схема для перевірки (як propTypes)
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegExp).required(),
    subscription: Joi.string(),
    token: Joi.string(),
});

const loginSchema = Joi.object({ // бібліотека для перевірки - схема для перевірки (як propTypes)
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegExp).required(),
});

const subscriptionUpdateSchema = Joi.object({
    subscription: Joi.string().required(),
});

const joiSchemaUser = {
    register: registerSchema,
    login: loginSchema,
    subscriptionUpdate: subscriptionUpdateSchema,
}

module.exports = {
    joiSchemaUser,
};