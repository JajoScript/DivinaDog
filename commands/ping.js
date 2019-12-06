// Importación de librerias.
const Discord = require('discord.js');

// Creacion del comando.
module.exports = (client, message, arguments) => {
    let ping = Math.floor(message.client.ping); 

    if (ping > 300) {
        let embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
        .setColor(0xff0000)
        message.channel.send(embed);

    } else if (ping > 150) {
        let embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
        .setColor(0xffcc00)
        message.channel.send(embed);

    } else {
        let embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
        .setColor(0x66ff66)
        message.channel.send(embed);

    }
};