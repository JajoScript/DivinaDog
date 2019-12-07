// Importación de modulos.
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

// Creacion del comando.
module.exports = (client, message, arguments) => {
    if (message.deletable) message.delete();

    let rMember = message.mentions.members.first() || message.guild.members.get(arguments[0]);

    if (!rMember)
        return message.reply("Disculpe, no puedo encontrar a la persona").then(m => m.delete(5000));

    if (!arguments[1])
        return message.channel.send("Necesito una descripción para agregar al reporte").then(m => m.delete(5000));
    
    const channel = message.guild.channels.find(c => c.name === "reportes")
        
    if (!channel)
        return message.channel.send("No encuentro el canal #reportes").then(m => m.delete(5000));

    const embed = new RichEmbed()
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL)
        .setAuthor("Miembro reportado", rMember.user.displayAvatarURL)
        .setDescription(stripIndents`**- Miembro:** ${rMember}
        **- Reportado por:** ${message.member}
        **- Reportado en:** ${message.channel}
        **- Razón:** ${arguments.slice(1).join(" ")}`);

    return channel.send(embed);
};