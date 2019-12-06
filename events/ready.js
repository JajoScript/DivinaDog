// Creación del componente
module.exports = (client) => {
    client.user.setPresence({
        status : 'online',
        game :{
            name: '#help | Info',
            url: null,
            type: "PLAYING"
        }
    });
}