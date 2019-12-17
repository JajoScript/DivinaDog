// Importacion de dependencias.
var wiki = require('wikijs').default;

// Creación del comando.
module.exports = async(client, message, arguments) => {
    const query = arguments.join(' ');

   wiki().random()
}