// Importación de dependencias.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    console.log(arguments, "and", arguments[0],"and", arguments.length);

    if(message.content ) return message.reply("hiciste una buena pregunta");
    else if(arguments[arguments.length - 1] != '?') return message.reply("hiciste una malas pregunta");
    // if(!argument[2]) return message.reply("Por favor de hacer una pregunta..")
    // let replies = ["Yes.", "no.", "El nene", "No cacho", "La cuestion social", "No lo se", "Probablemente", "Preguntame despues"];
    
    // let result = Math.floor((Math.random() * replies.length));
    // let question = args.slice(0).join(" ");

    // let ballEmbed = new Discord.RichEmbed()
    //     .setAuthor(message.author.tag)
    //     .setColor("#576ed4")
    //     .addField("Pregunta :", question)
    //     .addField("Respuesta :", replies[result]);

    // message.channel.send(ballEmbed);
};