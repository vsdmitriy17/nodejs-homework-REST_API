const { createError, sendVerifyMail } = require("../../helpers");
const { User } = require("../../models/user");

const againVerifyMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw createError(400, "request body missing required field email");
  }

  const user = await User.findOne({
        email: email,
    });

    if (!user) {
        throw createError(404, error.message);
    };

  const { verify, verificationToken } = user;
  if (verify) {
    throw createError(400, "Verification has already been passed");
  }

  await sendVerifyMail(email,verificationToken);
  res.json({ message: "Verification email sent" });
};

module.exports = againVerifyMail;