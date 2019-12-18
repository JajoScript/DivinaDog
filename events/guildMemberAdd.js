// Importación del modulo.
const Weez = require("weez");

module.exports = async (client, member) => {
    // console.log(`[Usuario nuevo]:[${member.user.username}]`);
    
    let weez = new Weez.WeezAPI(process.env.WEEZ_KEY);
    
    let welcome = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("https://i.imgur.com/0YrfJgx.jpg")
        .textoTitulo(`Bienvenido ${member.user.username}`)
        .textoDesc("Disfruta tu tiempo aqui!")
        .textoColor("ffffff")
        .acceso(weez);
    
    let img = await Weez.bienvenidaRender(welcome);
    member.guild.channels
        .find((x) => x.name === "general")
        .send({files: [img]})
        .catch((error) => {
            // console.error(error);
        });

    // member.guild.channels.get(process.env.CHANNEL_ID).send({files: [img]});
};