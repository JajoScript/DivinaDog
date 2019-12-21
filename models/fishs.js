// DataBase Dependencies.
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const fishSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    username: String,
    
    golden: Number,
    normal: Number,
    cart: Number
});

// Exports 
module.exports = mongoose.model("fishs" , fishSchema);