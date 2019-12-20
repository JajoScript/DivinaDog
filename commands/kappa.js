// Importación de dependencias.
const { Attachment } = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    const attachment = new Attachment('https://i.imgur.com/k4T97nv.jpg');
    message.delete();
    message.channel.send(attachment);
};
