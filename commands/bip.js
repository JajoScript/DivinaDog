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
                    .addField(':fleur_de_lis: Estado: ', value.message)
                    .addField(':moneybag: Saldo: ', value.balance)
                    .addField(':floppy_disk: Ultimo uso: ', format(value.date))

                message.reply(bipEmbed);
            })
            .catch(error => {
                console.error(error);
                message.reply('Disculpe' + error.message);
            });

        // Save Bip
        Bip.findOne({
                userID : message.author.id
            }, (error, schema) => {
                
                if(!schema){
                    new_Schema = new Bip({
                        _id : mongoose.Types.ObjectId(),
                        username: bipUser,
                        userID : message.author.id,
                        bip: [`${cardNumber}`]
                    });
        
                    console.log("[DB] creado nuevo usuario bip");
        
                    new_Schema.save()
                        .then(resultado => console.log(resultado))
                        .catch(error => console.log(error))
                }
                else if(schema){
                    console.log("[DB] Esquema encontrado!");
                    console.log(schema);

                    const cardFound = schema.bip.find(cards => cards == cardNumber);
                    console.log(`[DB] cardFound : ${cardFound}`);

                    if(!cardFound){
                        console.log(`[DB] card: ${cardNumber} // not found`);
                        
                        schema.bip.push(cardNumber);
                        
                        schema.save()
                            .then(resultado => console.log(resultado))
                            .catch(err => console.log(err))

                        console.log(`[DB] Card Added ${cardNumber}`);
                    }
                    else if(cardFound){
                        console.log(`[DB] card: ${cardNumber} // found`);
                    }
                }
            })
        .then(() => {
            console.log(`[DB] Bip save.`);
        })
        .catch(error=>{
            console.log(`[Error] ${error}`);
        });
    }
    

    
}       