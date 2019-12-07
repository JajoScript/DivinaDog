// Importación de modulos.
const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

// Creación del comando.
module.exports = async (client, message, arguments) => {
    const subReddits = ["dankmeme", "meme", "me_irl", "chile"];

    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
};