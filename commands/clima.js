// Importación de modulos.
const axios = require('axios');
const { RichEmbed } = require('discord.js');

// Creación del componente.
module.exports = async (client, message, arguments) => {
    const dia = arguments.join(' ');
    console.log(dia);
    if(dia === 'hoy' || dia == 'mañana'){
        await axios.get('http://api.meteored.cl/index.php?api_lang=cl&localidad=18578&affiliate_id=tew8s642xtgv&v=3.0')
            .then(value => {
                
                if(dia == 'hoy'){
                    const climaEmbed = new RichEmbed()
                        .setColor("BLUE")
                        .setTitle(`Pronostico para Hoy: ${value.data.day['1'].name}`)
                        .addField('Mes :', value.data.day['1'].month)
                        .addField('Pronostico :', value.data.day['1'].symbol_description)
                        .addField('Temperatura Minima :', value.data.day['1'].tempmin)
                        .addField('Temperatura Maxima :', value.data.day['1'].tempmax)
                        .addField('Humedad :', value.data.day['1'].humidity)
                        .addField('Indice UV :', value.data.day['1'].uv_index_max)

                    message.channel.send(climaEmbed);
                }
                else if(dia == 'mañana'){
                    const climaEmbed = new RichEmbed()
                        .setColor("BLUE")
                        .setTitle(`Pronostico para Mañana: ${value.data.day['2'].name}`)
                        .addField('Mes :', value.data.day['2'].month)
                        .addField('Pronostico :', value.data.day['2'].symbol_description)
                        .addField('Temperatura Minima :', value.data.day['2'].tempmin)
                        .addField('Temperatura Maxima :', value.data.day['2'].tempmax)
                        .addField('Humedad :', value.data.day['2'].humidity)
                        .addField('Indice UV :', value.data.day['2'].uv_index_max)

                    message.channel.send(climaEmbed);
                }
                
                
                
            })
            .catch(error => {
                console.error(error);
                message.reply("Disculpe, algo salio mal.")
            });
    }
    
}