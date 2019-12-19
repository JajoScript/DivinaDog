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
        return
    }
    else if(cardNumber){
        Bip.findOne({
            userID : message.author.id
        }, (error, schema) => {
            console.log(schema);

            if(!schema){
                message.reply("Usted no tiene tarjetas registradas!");
                return
            }

            else if(schema){
                console.log("[Bips]", schema.bip);
                
                const cardFound = schema.bip.find(cards => cards == cardNumber);
                console.log(`[DB] cardFound : ${cardFound}`);

                if(!cardFound){
                    message.reply("Usted no tiene registrada esa tarjeta!");
                    return
                }

                schema.bip.pull(cardFound);

                schema.save()
                    .then(resultado => console.log(resultado))
                    .catch(err => console.log(err))

                console.log(`[DB] Card Deleted ${cardNumber}`);
                message.reply("Se elimino la tarjeta de su registro.");
            }
        });
    }
};