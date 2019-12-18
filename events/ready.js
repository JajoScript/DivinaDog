// Importación de dependencias.
const mongoose = require("mongoose");

// Creación del Evento.
module.exports = (client) => {
    // Set Status
    client.user.setPresence({
        status : "online",
        game :{
            name: `${process.env.STATUS || `${process.env.PREFIX || '$'}help | Default mode`}`,
            url: null,
            type: "PLAYING"
        }
    });

    // Database.
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
        .then(() => {
            // console.log("[DB] Base de datos conectada!");
        })
        .catch((error) => {
            // console.log("[DB] Base de datos no conectada!");
            // console.log(error);
        });
};


