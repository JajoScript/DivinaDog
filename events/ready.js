// Creación del componente
module.exports = (client) => {
    client.user.setPresence({
        status : 'online',
        game :{
            name: `${process.env.STATUS || `${process.env.PREFIX || '$'}help | Default mode`}`,
            url: null,
            type: "PLAYING"
        }
    });
}