// Creación del comando.
module.exports = (client, message, arguments) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply('Disculpe, debe mencionar a un usuario.');
    message.channel.send('**'+ user.username +',** el usuario **'+message.author.username+'** te regalo una :cookie:. \n\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:');
};
