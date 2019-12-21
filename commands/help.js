// Importación de modulos.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

}