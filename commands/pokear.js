// Importación de dependencias.
const {RichEmbed} = require('discord.js');

// Creación del comando.
module.exports = (client,message, arguments) => {
    let user = message.mentions.users.first();
    if(!user){
        message.reply("Disculpe, Debe mencionar a un usuario!");
    }
    else{
        for(k=0;k<5;k++){
            message.channel.send(`${user}! Hey Wake UP!`);
        }
    }
};