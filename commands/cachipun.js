const { RichEmbed } = require("discord.js");

module.exports = async (client,message,arguments) => {
    async function promptMessage(message, author, time, validReactions){
        time *= 1000;

        for (const reaction of validReactions) await message.react(reaction);
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        return message
            .awaitReactions(filter, { max: 1, time: time})
            .then(collected => collected.first() && collected.first().emoji.name);
    }


    const chooseArr = ["🗻", "📰", "✂"];
    
    const embed = new RichEmbed()
        .setColor("#ffffff")
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("Añade una reacción a los emojis para jugar!")
        .setTimestamp();

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);
    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
    const result = await getResult(reacted, botChoice);
    
    await m.clearReactions();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") || (me === "📰" && clientChosen === "🗻") || (me === "✂" && clientChosen === "📰")) {
            return "Ganaste!";
        } else if (me === clientChosen) {
            return "Es un empate!";
        } else {
            return "Perdiste!";
        }
    }
}
