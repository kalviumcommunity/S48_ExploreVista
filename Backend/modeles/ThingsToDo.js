const mongoose = require("mongoose");

const AsapSchema = new mongoose.Schema({
    id:Number,
    place:String,
    city:String,
    state:String,
    vehicles_available:Array ,
    options_to_stay:Array ,
    brief_history:String,
    best_time_to_visit:String,
});

const AsapModal = mongoose.model("guide",AsapSchema);
module.exports = AsapModal;
