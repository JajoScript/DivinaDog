// Importación de la dependencia.
const urban = require('urban')
const {RichEmbed} = require('discord.js');

// Creacion del comando.
module.exports = (client, message, arguments) => {
    const query = arguments.join(' ');
    
    result = urban(query);
    const dictionary = result.first();
    
    console.log(dictionary._req)


    
}
