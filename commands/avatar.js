const Discord = require('discord.js');

module.exports = (client, message, arguments) => {
    let person = message.mentions.users.first();
    if(!person){
        person = message.author;
    }

    let avatarEmbed = new Discord.RichEmbed()
        .setImage(`${person.displayAvatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${person.username}`);
    
    message.channel.send(avatarEmbed);
}