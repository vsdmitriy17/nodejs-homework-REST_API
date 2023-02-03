const express = require('express')
const { joiSchemaContact } = require("../../models/joiSchemaContact");
const { getAll, get, post, remove, put, patch } = require("../../controllers/contacts");
const { controllerWrapper } = require("../../helpers");
const { authIdent, validation } = require("../../middlewares");

const router = express.Router();

router.get('/', authIdent, controllerWrapper(getAll));

router.get('/:contactId', authIdent, controllerWrapper(get));

router.post('/', authIdent, validation(joiSchemaContact.add), controllerWrapper(post));

router.delete('/:contactId', authIdent, controllerWrapper(remove));

router.put('/:contactId', authIdent, validation(joiSchemaContact.add), controllerWrapper(put));

router.patch('/:contactId/favorite', authIdent, validation(joiSchemaContact.updateFavorite), controllerWrapper(patch));

module.exports = router
