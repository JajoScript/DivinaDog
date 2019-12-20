// Importacion de Dependencias.
const {Attachment} = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    const attachment = new Attachment("../Images/Zivalo.jpg");
    message.delete();
    message.channel.send(attachment);
};