// Importación de las dependencias.
const axios = require('axios');
const {RichEmbed} = require('discord.js');
const countdown = require('countdown');

// Creacion del comando.
module.exports = async (client, message, arguments) => {
    const username = arguments.join(' ');
    if(!username){
        message.reply("Disculpe, necesito un username para trabajar");
        return
    };
    
    message.channel.send(":hourglass: Cargando...")
        .then(msg => {
            msg.delete(3000);
        })
        .catch(error => {
            console.log(`[ERROR] ${error}`);
        });

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
                .addField("Repositorios Publicos:", profile.data.public_repos)
                .addField(`Año:`, userData.data.contributions.year)
                .addField(`Contribuciones este año:`, userData.data.contributions.total)

            message.channel.send(githubEmbed);
        })
        .catch(error => {
            console.log(`[ERROR] ${error}`);
        })
};