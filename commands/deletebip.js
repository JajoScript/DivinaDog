// Importación de dependendencias.
const mongoose = require("mongoose");

// Importación del esquema.
const Bip = require("../models/bips.js");

// Creacion del comando.
module.exports = async (client, message, arguments) => {
    
    // Bip Query
    const cardNumber = arguments.join(' ');

    if(!cardNumber || cardNumber.length < 8){
        message.reply("Disculpe, necesito el numero de la bip para trabajar.");
    }
    else if(cardNumber){
        Bip.findOneAndDelete({
            userID : message.author.id
        }, (error, schema) => {
            if(error){
                console.log(error);
            }

            if(schema){
                
            }
        });
    }
};