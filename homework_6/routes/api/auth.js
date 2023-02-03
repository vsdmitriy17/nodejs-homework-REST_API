const express = require("express");
const { joiSchemaUser } = require("../../models/joiSchemaUser");
const { register, verifyMail, againVerifyMail, login, getCurrent, logout, subscriptionUpdate, avatarUpdate } = require("../../controllers/auth");
const { controllerWrapper } = require("../../helpers");
const { authIdent, upload, validation } = require("../../middlewares");

const router = express.Router();
router.post('/signup', validation(joiSchemaUser.register), controllerWrapper(register)); // signup
router.get('/verify/:verificationToken', controllerWrapper(verifyMail));
router.post('/verify', controllerWrapper(againVerifyMail));
router.post('/login', validation(joiSchemaUser.login), controllerWrapper(login)); // signin
router.get('/current', authIdent, controllerWrapper(getCurrent)); // получити данні юзера по токену
router.get('/logout', authIdent, controllerWrapper(logout)); // logout
router.patch('/', authIdent, validation(joiSchemaUser.subscriptionUpdate), controllerWrapper(subscriptionUpdate)); // logout
router.patch('/avatars', authIdent, upload.single("avatar"), controllerWrapper(avatarUpdate)); // patch avatar

module.exports = router;