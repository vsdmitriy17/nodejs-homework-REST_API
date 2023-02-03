const Joi = require("joi");

const contactAddSchema = Joi.object({ // бібліотека для перевірки - схема для перевірки (як propTypes)
    name: Joi.string().required(),
    email: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.boolean(),
    // owner: Joi.ObjectId(),
});

const contactUpdateFavoriteSchema = Joi.object({ // бібліотека для перевірки - схема для перевірки (як propTypes)
    favorite: Joi.boolean().required(),
});

const joiSchemaContact = {
    add: contactAddSchema,
    updateFavorite: contactUpdateFavoriteSchema,
}

module.exports = {
    joiSchemaContact,
};