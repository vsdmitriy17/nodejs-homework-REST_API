const { Contact, schemas } = require("../../models/contact");
const { createError } = require("../../helpers");

const patch = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.status(200).json(result);
}

module.exports = patch;