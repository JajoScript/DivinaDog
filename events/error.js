// Importación del modulo.
module.exports = (client, error) => {
    client.channels.get(process.env.CHANNEL_ID).send("Se genero un error");
    console.log(`[error] ${error}`);
}