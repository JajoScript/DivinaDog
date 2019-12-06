// Creacion del comando.
module.exports = (client, message, arguments) => {
    let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!, "+ ping + "ms");
}