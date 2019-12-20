// Importación de dependencias.
const {RichEmbed} = require('discord.js');

// creación del comando.
module.exports = async (client, message, arguments) => {
    const testEmbed = new RichEmbed()
        .addField("hola");
    
    message.channel.send(testEmbed)
        .then(async (embed) => {
            await embed.react('⬅');
            await embed.react('➡');
        })

    const filter = (reaction, user) => {
        return ['➡', '⬅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    await message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '➡') {
                message.reply('Derecha');
            } else {
                message.reply('Izquierda');
            }
        })
        .catch(collected => {
            message.reply('no reaccionaste');
        });
    
};

