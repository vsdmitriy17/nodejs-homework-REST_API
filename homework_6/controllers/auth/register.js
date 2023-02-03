const { User } = require("../../models/user");
const { createError, sendVerifyMail } = require("../../helpers");
const bcrypt = require("bcrypt"); 
const gravatar = require("gravatar"); // бібл. для генерування аватарок
const { v4 } = require("uuid");

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // Перевірка на наявність такого email в базі, агументом до методу create() - повинен бути об'єкт
    if (user) {
        throw createError(409, `Email ${email} in use`);
    }

    const verificationToken = v4();
    await sendVerifyMail(email,verificationToken);

    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10); // хешування пароля
    const result = await User.create({ ...req.body, password: hashPassword, avatarURL, verify: false, verificationToken }); // створення нового user в базі
    res.status(201).json({
        email: result.email,
    });
}

module.exports = register;