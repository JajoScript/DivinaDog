// Importación de modulos.

// Creación de comando.
module.exports = (client, message, arguments1 ) => {
    let rollfish = Math.floor(Math.random() * 7) +1;

    if(rollfish === 1){
        message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :tropical_fish: +3 puntos');

    }else if(rollfish === 2){
        message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :fish: +2 puntos');

    }else {
        
        message.channel.send('Que mal :(, ' + message.author.username + '! pescaste: :shopping_cart: +0 puntos');
    }
};