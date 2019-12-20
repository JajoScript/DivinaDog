// Importación de modulos.
const Discord = require('discord.js');

// Creación del comando.
module.exports = (client, message, arguments) => {
    const numero = arguments.join(' ');
    console.log("[number]", numero);
    
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

    if(!numero || numero == 1){
        const helpEmbed = new Discord.RichEmbed()
        .setTitle("Help Pagina 1")
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('ping', 'Compueba la latencia del BOT con la API de discord', true)
        .addField('avatar', 'Muestra el avatar de un usuario', true)
        .addField('server', 'Muestra información de un servidor', true)
        .addField('clear', 'Limpia una cantidad de mensajes', true)
        .addField('doggo', 'Envia un perrito aleatorio', true)
        .addField('say', 'Me ayudas a hablar', true)
        .addField('flipcoin', 'Lanzo una moneda al aire', true)
        .addField('cookie', 'Un comando para regalar galletas', true)
        .addField('8ball', 'Te doy la respuesta a las preguntas que te alteran la existencia', true)
        .addField('bot', 'Te entrego información sobre mi', true)
        .addField('instagram', 'Te entrego información el perfil de instagram que me entregues', true)
        .addField('destroy', 'Destruye la conexion del bot', true)
        .addField('cachipun', 'Te permite jugar al cachipun contra mi', true)
        .addField('meme', 'Envio memes sacados de reddit', true)
        .addField('love', 'Envio el porcentaje de amor entre dos personas', true)
        .addField('report', 'Genero un reporte de una pesona que tenga un comportamiento inadecuado', true)
        .addField('bip', 'Envio los datos de la tarjeta bip que ingreses', true)
        .addField('mybip', 'Envio los datos de todas las tarjetas que a utilizado', true)
        .addField('deletebip', 'Elimino la tarjeta ingresada de su registro', true)
        .addField('sismo', 'Entrego información respecto al ultimo sismo', true)
        .addField('clima', 'Entrego información respecto al clima', true)
        .addField('chuck', 'Entrego chistes de chuck norris', true)
        .addField('fish', 'Te permito ir de pesca', true)
        .addField('chuck', 'Entrego chistes de chuck norris', true)

        .addField('Invitacion', `[Link de invitacion](${process.env.INVITATION || 'http://javier.com'})`, true)
        .setFooter(`Version ${process.env.VERSION || "1.0"}`, client.user.avatarURL)
        .setColor('#56d44a')

        message.author.send(helpEmbed);
    }
    else if(numero == 2){
        const helpEmbed = new Discord.RichEmbed()
        .setTitle("Help Pagina 2")
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('pokear', 'le hago spam al usuario que me indiques', true)
        .addField('github', 'Entrego información sobre el perfil de github', true)
        .addField('zivalo', 'Envio un hermoso ZivaloFace', true)

        .addField('Invitacion', `[Link de invitacion](${process.env.INVITATION || 'http://javier.com'})`, true)
        .setFooter(`Version ${process.env.VERSION || "1.0"}`, client.user.avatarURL)
        .setColor('#56d44a')

        message.author.send(helpEmbed);
    }
    
    
}