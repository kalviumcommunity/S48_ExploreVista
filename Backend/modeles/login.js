const Joi = require('joi');
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name: String,
    password: String
});

const loginValidationSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
});


const LoginModal = mongoose.model("users", LoginSchema);
module.exports = LoginModal;
module.exports = loginValidationSchema;