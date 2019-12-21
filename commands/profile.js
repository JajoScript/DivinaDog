// Importacion de dependencias.
const { RichEmbed } = require("discord.js");
const mongoose = require("mongoose");
const { format } = require('timeago.js');

// Importación del modelo.
const Bip = require("../models/bips.js");
const Respect = require("../models/respects.js");

// Creacion del comando.
module.exports = async (client, message, arguments) => {

    const profileEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(":bust_in_silhouette: Perfil de " + message.author.username)
        .setDescription("Información del usuario:")
        .addField(":tada: Fecha de creacion:", format(message.author.createdAt))
        .addField(":ticket: Identificador:", message.author.id)
        .setFooter("Server: " + message.guild)
        .setThumbnail(message.author.displayAvatarURL)

    await Bip.findOne({
        userID: message.author.id
    }, (error, schema) => {
        if(error){
            console.log(`[ERROR] ${error}`);
        }
        
        console.log(schema);
        
        // Asignación de datos segun esquema.
        if(!schema){
            console.log("[DB] esquema no encontrado");
            profileEmbed.addField(":credit_card: Tarjetas: ", "Tarjetas no encontradas :(");

        }
        else if(schema){
            console.log("[DB] esquema encontrado");
            profileEmbed.addField(":credit_card: Tarjetas: ", schema.bip)
        }
    });

    await Respect.findOne({
        userID: message.author.id
    }, (error, schema) => {
        if(error){
            console.log(`[ERROR] ${error}`);
        }
        
        console.log(schema);
        // Asignación de datos segun esquema.
        if(!schema){
            console.log("[DB] esquema no encontrado");
            profileEmbed.addField(":trophy: Respetos: ", "Aún no tienes respetos :(");

        }
        else if(schema){
            console.log("[DB] esquema encontrado");
            profileEmbed.addField(":trophy: Respetos: ", schema.respects)
        }
    });
    
    message.channel.send(profileEmbed);
};