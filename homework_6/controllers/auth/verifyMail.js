const { User } = require("../../models/user");
const { createError } = require("../../helpers");

async function verifyMail(req, res, next) {
    const { verificationToken } = req.params;

    const user = await User.findOne({
        verificationToken: verificationToken,
    });

    if (!user) {
        throw createError(404, error.message);
    };

    await User.findByIdAndUpdate(user._id, {
        verify: true,
        verificationToken: "",
    });

    return res.status(200).json({
        message: "Verification successful",
    });
}

module.exports = verifyMail;