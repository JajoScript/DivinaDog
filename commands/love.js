// Importación de modulos.
const { RichEmbed } = require("discord.js");

// Creación del comando.
module.exports = async (client, message, arguments) => {
    
    function getMember(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    }

    let person = getMember(message, arguments[0]);

    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }

    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    const embed = new RichEmbed()
        .setColor("#ffb6c1")
        .addField(`**${person.displayName}** ama mucho a **${message.member.displayName}** en:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

    message.channel.send(embed);
};