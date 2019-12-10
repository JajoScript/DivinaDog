// Importación de dependencias.
const bip = require('bip');
const {RichEmbed} = require('discord.js');
const { format } = require('timeago.js');

// Creación del comando
module.exports = async (client, message, arguments) => {

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
    }
    

    
}       