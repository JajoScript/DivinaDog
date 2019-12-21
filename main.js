// Importación de variables de entorno.
require("dotenv").config();

// Importación de modulos.
const Discord = require("discord.js");
const express = require("express");
let { readdirSync } = require("fs");

// Instanciación de la clase Discord.
const client = new Discord.Client();

// Instanciación de los comandos.
client.commands = new Discord.Collection();

// Controlador de comandos.
for(const file of readdirSync("./commands/")){

    // Filtro de archivos.
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);
        let rute = "./commands/" + file;
        let fileContent = require(rute);
        client.commands.set(fileName, fileContent);
    }
}

// Controlador de Eventos.
for(const file of readdirSync("./events/")){
    // Filtro de archivos.
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);
        let rute = "./events/" + file;
        let fileContent = require(rute);
        client.on(fileName, fileContent.bind(null, client));

        delete require.cache[require.resolve("./events/" + file)];
    }
}

// Creación del servidor.
const app = express();

// Rutas
app.get("/", (request, response) => {
    response.send("Hola Mundo");
});

// Asignación de puerto.
app.listen((process.env.PORT || 3000), () => {
    // console.log("[SERVER] Server ON PORT:", (process.env.PORT || 3000));
});

// Inicio de sesión
client.login(process.env.TOKEN)
    .then(() => {
        // console.log(`[BOT] Estoy listo, soy ${client.user.tag}`);
    })
    .catch((error) => {
        // console.error('[ERROR] Error al iniciar sesión', error);
    });