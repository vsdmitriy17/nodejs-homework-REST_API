const { Schema, model } = require('mongoose');

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // регулярний вираз email

const userSchema = new Schema( // схема моделі contact
    { 
        password: {
            type: String,
            minlength: 6,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            match: emailRegExp, // валідація згідно регулярного виразу
            required: [true, 'Email is required'],
            unique: true,
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter"
        },
        avatarURL: {
            type: String,
            required: [true, 'Avatar is required'],
        },
        token: {
            type: String,
            default: null,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            required: [true, 'Verify token is required'],
        },
    },
    { // налаштування версії
        versionKey: false, // номер, кількість весій
        timestamps: true, // час зміни версії
    }
);

const User = model("user", userSchema);

module.exports = {
    User,
};