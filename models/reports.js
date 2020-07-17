// DataBase Dependencies.
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    username: String,
    reports: Number
});

// Exports 
module.exports = mongoose.model("reports" , ReportSchema);