const nodemailer = require("nodemailer");
// require("dotenv").config();

const { FROM_EMAIL, MAILTRAP_PASS, MAILTRAP_USER } = process.env;

async function sendVerifyMail(toEmail,verificationId) {
    try {
        const email = {
            from: FROM_EMAIL,
            to: toEmail,
            subject: "E-mail verification",
            html: `<a href="localhost:3000/api/users/verify/${verificationId}">Please confirm your e-mail</a>`,
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: MAILTRAP_USER,
                pass: MAILTRAP_PASS
            }
        });

        await transport.sendMail(email);
    } catch (error) {
        console.error("app error:", error);
    }
}

module.exports = sendVerifyMail;