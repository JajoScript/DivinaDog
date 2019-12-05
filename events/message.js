module.exports = (client, message) => {
    // Control de errores.
    // if(!message.content.startsWith(process.env.PREFIX || '#')) return;
    if(message.author.bot) return;

    //Definicion de comandos y argumentos.
    const arguments = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();

    // TEsting
    console.log(`[${message.author.username}] ${message.content}`);

    let Command = client.commands.get(command);
    if(!Command) return;
    Command(client,message,arguments);
}