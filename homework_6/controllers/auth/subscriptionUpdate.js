const { User } = require("../../models/user");
const { createError } = require("../../helpers");

const subscriptionUpdate = async (req, res, next) => {
    const { id } = req.user;
    await User.findByIdAndUpdate(id, req.body);
    res.status(200).json({
        message: "User subscription updated",
    });
}

module.exports = subscriptionUpdate;