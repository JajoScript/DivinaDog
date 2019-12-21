// Importación de modulos.
const mongoose = require("mongoose");

// Importación del modelo.
const Fish = require("../models/fishs");

// Creación de comando.
module.exports = async (client, message, arguments1 ) => {
    let rollfish = Math.floor(Math.random() * 7) +1;
    
    var golden, normal, cart;

    if(rollfish === 1){
        message.channel.send("Felicitaciones, " + message.author.username + "! pescaste: :tropical_fish:");
        golden = 1; normal = 0; cart = 0;

    }else if(rollfish === 2){
        message.channel.send("Felicitaciones, " + message.author.username + "! pescaste: :fish:");
        golden = 0; normal = 1; cart = 0;

    }else { 
        message.channel.send("Que mal :(, " + message.author.username + "! pescaste: :shopping_cart:");
        golden = 0; normal = 0; cart = 1;
    }

    await Fish.findOne({
        userID : message.author.id
    }, (error, schema) => {
        if(error) console.log(error);

        if(!schema){
            //console.log("[DB] Squema no encontrado");

            new_Schema = new Fish({
                _id : mongoose.Types.ObjectId(),
                username: message.author.username,
                userID : message.author.id,
                golden: golden,
                normal: normal,
                cart: cart,
            });
        

            //console.log("[DB] creado nuevo usuario fish");

            new_Schema.save()
                .then(resultado => console.log(resultado))
                .catch(error => console.log(error))

        }
        else if(schema){
            //console.log("[DB] Squema encontrado");
            
            const newGolden = schema.golden + golden;
            const newNormal = schema.normal + normal;
            const newCart = schema.cart + cart;

            schema.updateOne({
                golden: newGolden,
                normal: newNormal,
                cart: newCart
            }).catch(error => console.log(error));

            schema.save()
                .then((resultado) => console.log(resultado))
                .catch((error) => console.log(error));
        }
    });
};