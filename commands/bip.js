// Importación de dependencias.
const bip = require('bip');
const {RichEmbed} = require('discord.js');
const { format } = require('timeago.js');
const fs = require('fs');

// Importación de datos.
let bipCards = JSON.parse(fs.readFileSync("./data/bip.json", "utf8"));

// Creación del comando
module.exports = async (client, message, arguments) => {

    // Catch User
    let bipUser = message.author.username
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
       
    }
    

    
}       