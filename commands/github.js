// Importación de las dependencias.
const axios = require('axios');
const {RichEmbed} = require('discord.js');

// Creacion del comando.
module.exports = async (client, message, arguments) => {
    const username = arguments.join(' ');
    if(!username){
        message.reply("Disculpe, necesito un username para trabajar");
        return
    };
    
    await axios.get(`https://github-contributions-api.now.sh/v1/${username}?format=nested`)
        .then( userData => {
            console.log(userData.data);

            const githubEmbed = new RichEmbed()
                .setColor("BLUE")
                .setTitle(`Usuario: ${username}`)
                .addField(`Año:`, userData.data.contributions.year)
                .addField(`Contribuciones este año:`, userData.data.contributions.total)
                .addField(`Contribuciones Faltantes:`, 1000 - userData.data.contributions.total)
                .addField(`Contribuciones por dia: `, parseInt(1000 / 31))
            
            message.channel.send(githubEmbed);
        })
        .catch(error => {
            console.log(`[ERROR] ${error}`);
        })
};