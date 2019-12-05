// Creación del componente
module.exports = (client) => {
    client.user.setPresence({
        status : 'online',
        game :{
            name: 'Esto es una prueba',
            url: null,
            type: "PLAYING"
        }
    });
}