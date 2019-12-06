// Importación de dependencias.
const Discord = require('discord.js');
const superagent = require('superagent');

// Creación del comando.
module.exports = async (client, message, arguments) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    
    let dogEmbed = new Discord.RichEmbed()
        .setColor("#524e43")
        .setTitle("Doggo :dog:")
        .setImage(body.url);

    message.channel.send(dogEmbed);

};