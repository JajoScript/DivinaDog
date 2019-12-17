// Importación de dependencias.
const bip = require('bip');
const {RichEmbed} = require('discord.js');
const { format } = require('timeago.js');
const mongoose = require("mongoose");

// Importación del esquema.
const Bip = require("../models/bips.js");

// Creación del comando
module.exports = async (client, message, arguments) => {

    // Catch User
    let bipUser = message.author.username;
    console.log(`[BIP_USER] ${bipUser}`);

    // Bip Query
    const cardNumber = arguments.join(' ');
    if(!cardNumber || cardNumber.length < 8){
        message.reply("Disculpe, necesito el numero de la bip para trabajar.");
    
    }
    else if(cardNumber) {
        await bip(cardNumber)
            .then(value => {
                console.log(value);
                const bipEmbed = new RichEmbed()
                    .setColor("BLUE")
                    .setTitle(`Tarjeta: ${value.number}`)
                    .addField('Estado: ', value.message)
                    .addField('Saldo: ', value.balance)
                    .addField('Ultimo uso: ', format(value.date))

                message.reply(bipEmbed);
            })
            .catch(error => {
                console.error(error);
                message.reply('Disculpe' + error.message);
            });

        // Save Bip
        Bip.findOne({
                userID : message.author.id
            }, (schema) => {
                console.log(schema);

                // if(!schema){
                //     new_Schema = new Bip({
                //         _id : mongoose.Types.ObjectId(),
                //         username: bipUser,
                //         userID : message.author.id,
                //         bip: [`${cardNumber}`]
                //     });
        
                //     console.log("[DB] creado nuevo bipUser");
        
                //     new_Schema.save()
                //         .then(resultado => console.log(resultado))
                //         .catch(err => console.log(err))
                // }
                // else if(schema){
                //     schema
                //         .updateOne({
                //             bips: [`${cardNumber}`]
                //         })
                //         .catch((err)=>console.log(err));
                // }
            })
        .then(() => {
            console.log(`[DB] Bip save.`)
        })
        .catch(error=>{
            console.log(`[Error] ${error}`);
        });
    }
    

    
}       