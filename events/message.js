module.exports = (client, message) => {
    // Control de errores.
    
    if(!message.guild) return console.log(`[DM][@ ${message.author.username}]:\"${message.content}\"`);

    // Testing
    console.log(`[${message.guild}][# ${message.channel.name}][@ ${message.author.username}]:\"${message.content}\"`);

    // Saludos
    if(message.content.toLowerCase() == 'gd') return message.reply('Buenos dias!');
    else if(message.content.toLowerCase() == 'gn') return message.reply('Buenas noches!');
    else if(message.content.toLowerCase() == 'te amo') return message.reply('Yo te amo más!');
    else if (message.content == "https://giant.gfycat.com/LeafyRashAmethystgemclam.mp4"){
        message.delete()
        message.reply("Que estai mandando maldito desgraciado")
    }
    else if(message.content == "https://giant.gfycat.com/LeafyRashAmethystgemclam.mp4"){
        message.delete()
        message.reply("Que estai mandando maldito desgraciado")
    }

    // time = ((60 * 1000) * 60) * 24;
    // client.setInterval(() => {
    //     console.log("[info] Intervalo iniciado.");
    //     message.channel.send("*Otro dia para decir: la base de datos esta **carggggada** de informacion.*");
    // }, time);

    if(!message.content.startsWith(process.env.PREFIX)) return;
    if(message.author.bot) return;

    //Definicion de comandos y argumentos.
    const arguments = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();

    let Command = client.commands.get(command);
    if(!Command) return;
    Command(client,message,arguments);
}