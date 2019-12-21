// Importación de modulos.
const mongoose = require("mongoose");

// Importación del modelo.
const Fish = require("../models/fishs");

// Creación de comando.
module.exports = async (client, message, arguments1 ) => {
    let rollfish = Math.floor(Math.random() * 7) +1;
    
    var fishGiven;

    if(rollfish === 1){
        message.channel.send("Felicitaciones, " + message.author.username + "! pescaste: :tropical_fish: +3 puntos");
        fishGiven = 3;

    }else if(rollfish === 2){
        message.channel.send("Felicitaciones, " + message.author.username + "! pescaste: :fish: +2 puntos");
        fishGiven = 2;

    }else { 
        message.channel.send("Que mal :(, " + message.author.username + "! pescaste: :shopping_cart: +0 puntos");
        fishGiven = 1;
    }

    await Fish.findOne({
        userID : message.author.id
    }, (error, schema) => {
        if(error) console.log(error);

        console.log(schema);

        if(!schema){
            console.log("[DB] Squema no encontrado");


        }
        else if(schema){
            console.log("[DB] Squema encontrado");
            
        }
    });
};