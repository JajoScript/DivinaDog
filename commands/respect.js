// Importacion de dependencias.
const {RichEmbed} = require("discord.js");

// Creación del comando.
module.exports = (client, message, arguments) => {
    let userRespect = message.mentions.members.first() || message.guild.members.get(arguments[0]);
    message.delete();

    // Filtro de errores.
    if(!userRespect){
        message.reply("Disculpe, debe mencionar a alguien.");
        return
    }

    const respectEmbed = new RichEmbed()
        .setTitle(userRespect.user.username + " ha recibido respetos")
        .setColor("GRAY")

    message.channel.send(respectEmbed);
    


};