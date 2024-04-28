const qrData = require("./src/data/data.json")
const runWhatsappClient = require('./src/helpers/wa-client');

module.exports = {
    qrValue : qrData.qrValue,
    runWhatsappClient : runWhatsappClient,
}