const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers");

const post = async (req, res) => {
    const { id: owner } = req.user; // забираэмо id юзера
    const result = await Contact.create({ ...req.body, owner, }); // агументом до методу create() - повинен бути об'єкт
    res.status(200).json(result);
}

module.exports = post;