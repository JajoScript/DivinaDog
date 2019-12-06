// Creación del componente
module.exports = (client) => {
    client.user.setPresence({
        status : 'online',
        game :{
            name: `${process.env.STATUS || '#help | Info'}`,
            url: null,
            type: "PLAYING"
        }
    });
}