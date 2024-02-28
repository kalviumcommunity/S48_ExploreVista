import mongoose from "mongoose"

const mongoose = required("mongoose")

const localSchema = new mongoose.Schema({
    
name:String,
vehicle_for_rent:String,
taxi_service:String,
best_vehicle_to_go_in:String
})

const localModal = mongoose.model("vehicle".localSchema)
module.exports = localModal;