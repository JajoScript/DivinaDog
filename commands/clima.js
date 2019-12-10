// Importación de modulos.
const axios = require('axios');
const { RichEmbed } = require('discord.js');

// Creación del componente.
module.exports = async (client, message, arguments) => {
    const dia = arguments.join(' ')
    if(!dia){
        message.reply("Use un numero junto al comando, siendo 1 lunes.");
        return
    }

    await axios.get('http://api.meteored.cl/index.php?api_lang=cl&localidad=18578&affiliate_id=tew8s642xtgv&v=3.0')
        .then(value => {

            const climaEmbed = new RichEmbed()
                .setColor("BLUE")
                .setTitle(`Pronostico para dia: ${value.data.day[dia].name}`)
                .addField('Mes :', value.data.day[dia].month)
                .addField('Pronostico :', value.data.day[dia].symbol_description)
                .addField('Temperatura Minima :', value.data.day[dia].tempmin)
                .addField('Temperatura Maxima :', value.data.day[dia].tempmax)
                .addField('Humedad :', value.data.day[dia].humidity)
                .addField('Indice UV :', value.data.day[dia].uv_index_max)

            message.channel.send(climaEmbed);
        })
        .catch(error => {
            console.error(error);
            message.reply("Disculpe, algo salio mal.")
        });
}