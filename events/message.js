module.exports = (client, message) => {
    // Testing
    console.log(`[${message.author.username}]:\"${message.content}\"`);
    
    // Saludos
    if(message.content.toLowerCase() == 'gd') return message.reply('buenos dias!');
    else if(message.content.toLowerCase() == 'gn') return message.reply('buenas noches!');
    
    // Control de errores.
    if(!message.content.startsWith(process.env.PREFIX)) return;
    if(message.author.bot) return;

    //Definicion de comandos y argumentos.
    const arguments = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();

    let Command = client.commands.get(command);
    if(!Command) return;
    Command(client,message,arguments);
}