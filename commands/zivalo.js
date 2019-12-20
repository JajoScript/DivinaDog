// Importacion de Dependencias.

// Creación del comando.
module.exports = (client, message, arguments) => {
    message.delete();
    message.channel.send({
        files: [{
          attachment: './images/zivalo.jpg',
          name: 'zivalo.jpg'
        }]
    });
};