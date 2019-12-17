// DataBase Dependencies.
const mongoose = require("mongoose");

// Schema
var Schema = mongoose.Schema;

var BipSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : String,
    bip: Array,
});

// Exports 
module.exports = mongoose.model("informe" , InformeSchema);