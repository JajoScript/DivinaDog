// Importación de dependencias.
const {RichEmbed} = require('discord.js');

// creación del comando.
module.exports = async (client, message, arguments) => {
    

    const textEmbed = new RichEmbed()
        .setTitle("Testing")
        .addField("Hola", "Esto es una prueba")
    
    const textEmbed2 = new RichEmbed()
        .setTitle("Testing 2")
        .addField("Hola", "Esto es otra prueba")

    const filter = (reaction, user) => {
        return ['👉'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.channel.send(textEmbed)
        .then(message => {
            message.react("👉")
            message.awaitReactions(filter, {max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '👉') {
                        message.delete();
                        message.channel.send(textEmbed2);
                    }
                })
        })
        .catch(() => {
            message.reply('no hiciste nada');
        });
    
};

