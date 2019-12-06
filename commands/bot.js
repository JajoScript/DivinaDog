// Importación de modulos.
const Discord = require("discord.js");
const moment = require("moment");
require('moment-duration-format');

// Creacion del Comando.
module.exports = (client, message, arguments) => {
    const activity = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
    const activityEmbed = new Discord.RichEmbed()
        .setColor(0x66ff66)

        .setAuthor(`Bot info`, client.user.avatarURL)
        .addField(`Dueño`, `JAJO#1878`, true)
        .addField(`Version`, `${process.env.VERSION || "1.0"}`, true)
        .addField(`Libreria`, `Discord ^11.5.1 (Js)`, true)

        .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(`Uptime`, `${activity}`, true)
        .addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)

        .addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
        .addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
        .addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

    message.channel.send(activityEmbed);
};