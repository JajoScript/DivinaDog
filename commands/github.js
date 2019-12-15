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
    
    const profile = await axios.get(`https://api.github.com/users/${username}`)
        .catch(error => {
            console.log(`[ERROR] ${error}`);
        });
    
    await axios.get(`https://github-contributions-api.now.sh/v1/${username}?format=nested`)
        .then( userData => {

            const githubEmbed = new RichEmbed()
                .setColor("BLUE")
                .setThumbnail(profile.data.avatar_url)
                .setTitle(`Usuario: ${username}`)
                .addField("Nombre:", profile.data.name)
                .addField("Locación:", profile.data.location)
                .addField("Repositorios:", profile.data.public_repos)
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