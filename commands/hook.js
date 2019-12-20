// Importación de dependencias.
const Discord = require('discord.js');

// Creación del Comando.
module.exports = (client, message, arguments) => {

    if(message.author.username === process.env.DEVELOPER || 'JAJO'){
        // console.log(arguments);

        message.channel.send("Usted es el desarrollador");
        
        if(arguments.length < 1){
            message.channel.send('Sin contenido.');
        };
        var hook = new Discord.WebhookClient((process.env.WEBHOOK_ID) , (process.env.WEBHOOK_TOKEN));

        hook.send(arguments.join(' ')).catch(console.error);;
    }
    else {
        message.reply('Usted no es el desarrollador, no puede usar este comando');
    }
};