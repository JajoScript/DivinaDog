// Importacion de dependencias.
const { RichEmbed } = require("discord.js");
const mongoose = require("mongoose");

// Importación del esquema.
const Respect = require("../models/respects.js");

// Creación del comando.
module.exports = (client, message, arguments) => {
    let userRespect = message.mentions.members.first() || message.guild.members.get(arguments[0]);
    message.delete();

    // Filtro de errores.
    if (!userRespect) {
        message.reply("Disculpe, debe mencionar a alguien.");
        return
    }
    else if(userRespect.id === message.author.id){
        message.reply("Disculpe, no se puede dar respetos a usted mismo.");
        return
    }

    const respectEmbed = new RichEmbed()
        .setTitle(userRespect.user.username + " ha recibido respetos")
        .setColor("GRAY")

    message.channel.send(respectEmbed);

    Respect.findOne({
        userID: userRespect.id
    }, (error, schema) => {
        if (!schema) {
            // New Profile
            new_Schema = new Respect({
                _id: mongoose.Types.ObjectId(),
                username: userRespect.user.username,
                userID: userRespect.id,
                respects: 1
            });

            console.log("[DB] creado nuevo usuario Respect");

            new_Schema.save()
                .then((resultado) => console.log(resultado))
                .catch((error) => console.log(error));
        }
        else if(schema){
            console.log("[DB] Schema found");
            const respetos = schema.respects + 1;
            
            // Actualizacion de datos.
            schema.updateOne({
                respects: respetos
            }).catch(error => console.log(error));

            schema.save()
                .then((resultado) => console.log(resultado))
                .catch((error) => console.log(error));
        }
    });

};