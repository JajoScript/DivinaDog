// Importación de dependencias.
const Discord = require('discord.js');

// Creación del Comando.
module.exports = (client, message, arguments) => {
    if(!arguments) return message.channel.send('Sin contenido.');
    var hook = new Discord.WebhookClient((process.env.WEBHOOK_ID) , (process.env.WEBHOOK_TOKEN));

    hook.send(arguments.join(' ')).catch(console.error);;
};