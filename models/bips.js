// DataBase Dependencies.
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const BipSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userID: String,
    username : String,
    bip: Array
});

// Exports 
module.exports = mongoose.model("bips" , BipSchema);