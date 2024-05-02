const qrData = require("./src/data/data.json")
const {runWhatsappClient, sendMessage} = require('./src/helpers/wa-client');

module.exports = {
    qrValue : qrData.qrValue,
    runWhatsappClient : runWhatsappClient,
    sendMessage,
}