// Importación de dependencias.
const { Attachment } = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    const attachment = new Attachment('https://imgur.com/hX1A67R');
    message.delete();
    message.channel.send(attachment);
};