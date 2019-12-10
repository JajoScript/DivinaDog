// Importación de Dependencias.
const axios = require('axios');
const {RichEmbed} = require('discord.js');

// Creación del comando.
module.exports = async (client, message, arguments) => {
    const response = await axios.get('http://api.icndb.com/jokes/random');
    const chuckEmbed = new RichEmbed()
        .setTitle(":bearded_person: Chuck Norris :bearded_person:")
        .setColor('ORANGE')
        .addField('Joke:', ` ${response.data.value.joke}`)

    message.channel.send(chuckEmbed);
};