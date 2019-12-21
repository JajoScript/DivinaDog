// DataBase Dependencies.
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const RespectSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    username: String,
    respects: Number
});

// Exports 
module.exports = mongoose.model("respects" , RespectSchema);