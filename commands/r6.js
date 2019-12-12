// Importación de modulos.
const R6API = require('r6api.js');
const r6api = new R6API(process.env.R6_EMAIL, process.env.R6_PASSWORD);

// Creación del comando.
module.exports = async (client, message, arguments) => {
    // Username input
    console.log(arguments);
    const username = arguments[0];
    const platform = arguments[1];
    
    if(!username || !platform){
        message.reply('Disculpe, debe escribir un usurio y la plataforma');
        return
    }
    
    await r6api.getId(platform, username)
        .then(response => console.log(`[RESPONSE] ${response}`))
        .catch(error => console.error(`[ERROR] ${error}`));
    
};