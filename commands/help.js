// Importación de modulos.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('ping', 'Compueba la latencia del BOT con la API de discord.', true)
        .addField('avatar', 'Muestra el avatar de un usuario.', true)
        .addField('server', 'Muestra información de un servidor.', true)
        .addField('clear', 'Limpia una cantidad de mensajes.', true)
        .addField('Invitacion', '[Link de invitacion](https://discord.gg/g6ssSmK)', true)
        .setFooter("Version 1.0", client.user.avatarURL)
        .setColor('#56d44a')
        
    message.author.send(embed);
}