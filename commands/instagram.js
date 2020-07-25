// Importación de dependencias.
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const fetch = require('node-fetch');

// Creación del comando.
module.exports = async (client, message, arguments) => {
    const name = arguments.join(' ');

    if(!name) message.reply('Disculpe, necesito un nombre para trabajar.');

    const url = `https://instagram.com/${name}/?__a=1`;

    await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cahe",
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then(res => res.text())
        .then(text => { 
            let info = JSON.parse(text);
            console.log(info);

            if(!info.graphql.user.username){
                return message.reply("Disculpe, no lo pude encontrar");
            }

            const account = info.graphql.user;
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
        })
    .catch(err => {
        console.log(err)
        message.reply("Disculpe, no lo pude encontrar")
    });
};