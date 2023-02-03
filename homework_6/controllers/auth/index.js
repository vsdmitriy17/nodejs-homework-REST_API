const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscriptionUpdate = require("./subscriptionUpdate");
const avatarUpdate = require("./avatarUpdate");
const verifyMail = require("./verifyMail");
const againVerifyMail = require("./againVerifyMail");

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    subscriptionUpdate,
    avatarUpdate,
    verifyMail,
    againVerifyMail,
}