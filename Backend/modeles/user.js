const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String // Add the password field
});

const UserModal = mongoose.model("users", UserSchema);
module.exports = UserModal;
