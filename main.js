// Importación de variables de entorno.
require('dotenv').config();

// Importación de modulos.
const Discord = require('discord.js');
let { readdirSync } = require('fs');

// Instanciación de la clase Discord.
const client = new Discord.Client();

// Instanciación de los comandos.
client.commands = new Discord.Collection();

// Controlador de comandos.
for(const file of readdirSync('./Commands/')){

    // Filtro de archivos.
    if(file.endsWith('.js')){
        let fileName = file.substring(0, file.length - 3);
        let fileContent = require(`./Commands/${file}`);
        client.commands.set(fileName, fileContent);
    }
}

// Controlador de Eventos.
for(const file of readdirSync('./Events/')){
    // Filtro de archivos.
    if(file.endsWith('.js')){
        let fileName = file.substring(0, file.length - 3);
        let fileContent = require(`/Events/${file}`);
        client.on(fileName, fileContent.bind(null, client));

        delete require.cache[require.resolve(`./Events/${file}`)];
    }
}
