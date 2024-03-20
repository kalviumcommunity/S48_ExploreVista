const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({  
    name: String,
    email: String,
    age: Number,
    password: String,
    places: [{ name: String, experiences: [String], feedback: [String] }], // Array of places with experiences and feedback
});

const userValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0),
    password: Joi.string().required()
});

const UserModal = mongoose.model("users", UserSchema);
module.exports = {
    UserModal,
    userValidationSchema
};
