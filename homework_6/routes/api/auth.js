const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { authIdent, upload } = require("../../middlewares");

const router = express.Router();
router.post('/signup', ctrlWrapper(ctrl.register)); // signup
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyMail));
router.post('/verify', ctrlWrapper(ctrl.againVerifyMail));
router.post('/login', ctrlWrapper(ctrl.login)); // signin
router.get('/current', authIdent, ctrlWrapper(ctrl.getCurrent)); // получити данні юзера по токену
router.get('/logout', authIdent, ctrlWrapper(ctrl.logout)); // logout
router.patch('/', authIdent, ctrlWrapper(ctrl.subscriptionUpdate)); // logout
router.patch('/avatars', authIdent, upload.single("avatar"), ctrlWrapper(ctrl.avatarUpdate)); // patch avatar

module.exports = router;