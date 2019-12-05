// Creacion del evento.
module.exports = (client, message) => {
    let channel = client.channels.get(process.env.CHANNEL_ID);
    console.log(`[Mensaje Eliminado]:[${message.author.username}]`);
}