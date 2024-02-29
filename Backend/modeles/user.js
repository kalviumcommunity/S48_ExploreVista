const mongoose = require('mongoose')

const AsapSchema = new mongoose.Schema({
    name:String,
    email: String,
    age: Number
})

const AsapModal = mongoose.model("users", AsapSchema)
module.exports = AsapModal