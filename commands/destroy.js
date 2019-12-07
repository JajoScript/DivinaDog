// Importación de modulos.

// Creación del comando.
module.exports = (client, message, arguments) => {
    const developer = 'JAJO';
    console.log(message.author.username);

    if(message.author.username === 'JAJO'){
        message.reply('Usted es el desarrollador, puede usar este comando');
        
        message.channel.send("Auto destruccion activada.")
        .then(() => {
            client.destroy().then(() => {
                process.exit();
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    else {
        message.reply('Usted no es el desarrollador, no puede usar este comando');
    }
    
};