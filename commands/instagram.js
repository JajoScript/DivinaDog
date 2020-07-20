// Importación de dependencias.
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const fetch = require('node-fetch');

// Creación del comando.
module.exports = async (client, message, arguments) => {
    const name = arguments.join(' ');

    if(!name) message.reply('Disculpe, necesito un nombre para trabajar.');

    const url = `https://instagram.com/${name}/?__a=1`;
 
    //     let url = 'https://example.com';

    // fetch(url)
    // .then(res => res.json())
    // .then((out) => {
    //   console.log('Checkout this JSON! ', out);
    // })
    // .catch(err => { throw err });

    try {
        const   response = await fetch(url)
            .then(url => url.json() )
            .catch(error => {
                throw error;
            });

        const account = response.graphql.user;

        const instagramEmbed  = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(account.full_name)
        .setThumbnail(account.profile_pic_url_hd)
        .setURL(account.external_url_linkshimmed)
        .addField("Información del perfil", stripIndents`
        **- Usuario:** ${account.username}
        **- Nombre Completo:** ${account.full_name}
        **- Biografia:** \n${account.biography.length === 0 ? "none": account.biography}
        **- Posts:** ${account.edge_owner_to_timeline_media.count}
        **- Seguidores:** ${account.edge_followed_by.count}
        **- Siguiendo:** ${account.edge_follow.count}
        **- Cuenta Privada:** ${account.is_private ? "si": "no"}
        `)

        message.channel.send(instagramEmbed);
    } catch {
        message.reply("Disculpe, no lo pude encontrar");
    }
};