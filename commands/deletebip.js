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

            else if(!schema){
                message.reply("Usted no tiene tarjetas registradas!");
    
                // New schema
                new_Schema = new Bip({
                    _id : mongoose.Types.ObjectId(),
                    username: bipUser,
                    userID : message.author.id,
                    bip: [`${cardNumber}`]
                });
    
                console.log("[DB] creado nuevo usuario bip");
    
                new_Schema.save()
                    .then(resultado => console.log(resultado))
                    .catch(err => console.log(err));
            }

            else if(schema){

            }
        });
    }
};