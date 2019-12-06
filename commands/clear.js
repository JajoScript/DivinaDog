// Importación de dependencias.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    console.log(arguments);
    console.log(arguments[0]);
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Disculpe, usted no tiene los poderes para hacer eso.");
    if(!arguments[0]) return message.reply("Disculpe, necesito un numero para trabajar.");

    if(arguments[0]>100){
        message.channel.send("Disculpe, solo puedo limpiar 100 mensajes a la vez")
        .then((msg) => {
            msg.delete(5000);
        })
        .catch((error) => {
            console.error('[Error]', error);
        });
    }
    else{
        message.channel.bulkDelete(arguments[0])
            .then(()=>{
                message.channel.send(`Limpiado ${arguments[0]} mensajes`).then(msg => msg.delete(5000));
            })
            .catch((error) => {
                console.error('[Error]', error);
            });  
    }

}