// Importación de dependencias.
const { Attachment } = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    message.delete();
    message.channel.send( attachment);
};
