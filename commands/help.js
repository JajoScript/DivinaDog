// Importación de modulos.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('Ping', 'Compueba la latencia del BOT con la API de discord', true)
        .addField('Avatar', 'Muestra el avatar de un usuario', true)
        .addField('Server', 'Muestra información de un servidor', true)
        .addField('Invitacion', '[Link de invitacion](https://discord.gg/g6ssSmK)', true)
        .setFooter("Version 1.0", client.user.avatarURL)
        .setColor(0x66b3ff)
        
    message.author.send(embed);
}