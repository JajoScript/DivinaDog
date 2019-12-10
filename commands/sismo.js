// Importación de dependencias.
const axios = require('axios');
const {RichEmbed} = require('discord.js');

// Creación del comando.
module.exports = async (client, message, arguments) => {
    const sismo = await axios.get('https://chilealerta.com/api/query/?user=jajobot&select=ultimos_sismos&limit=1&country=Chile');
    const ultimoSismo = sismo.data.ultimos_sismos_Chile[0];
    
    const sismoEmbed = new RichEmbed()
        .setColor("RED")
        .setTitle("Ultimo Sismo:")
        .addField('Lugar de referencia: ', ultimoSismo.reference)
        .addField('Hora Chile: ', ultimoSismo.chilean_time)
        .addField('Magnitud: ', ultimoSismo.magnitude)
        .addField('Latitud:', ultimoSismo.latitude)
        .addField('Longitud: ', ultimoSismo.longitude)
        .addField('Profundidad: ', ultimoSismo.depth)

    message.reply(sismoEmbed);
}