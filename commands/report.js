// Importación de modulos.
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const mongoose = require("mongoose");

// Importación de modelos.
const Report = require("../models/reports.js");
const { Mongoose } = require("mongoose");

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

    // Cargando la base de datos
    Report.findOne({
        userID: rMember.id
    }, (error, schema) => {
        if(!schema){
            // New Profile for reports
            newSchema = new Report({
                _id: mongoose.Types.ObjectId(),
                userID: rMember.id,
                username: rMember.user.username,
                reports: 1
            });

            newSchema.save()
                .then((resultado) => console.log(resultado))
                .catch((error) => console.log(error));
        }
        else if(schema){
            const reports = schema.reports + 1;

            // Actualizando los datos.
            schema.updateOne({
                reports: reports
            }).then(result => console.log(result))
            .catch(error => console.log(error));

            schema.save()
                .then(save => console.log(save))
                .catch(error => console.log(error));
        }
    });

    return channel.send(embed);
};