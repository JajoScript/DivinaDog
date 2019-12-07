// Importación de dependencias.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    if(!arguments[1]) return message.reply("Disculpe, necesita enviar una pregunta");

    let replies = ["Si.", "No.", "Creo que el Nene debe saber", "No cacho", "La cuestion social", "Muy seguramente", "Probablemente", "Preguntame despues"];
    let result = Math.floor((Math.random() * replies.length));
    let question = arguments.slice(0).join(" ");

    let ballEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#576ed4")
        .addField("Pregunta :", question)
        .addField("Respuesta :", replies[result]);

    message.channel.send(ballEmbed);
};