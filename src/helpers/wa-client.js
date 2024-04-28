const fs = require('fs');
const { Client } = require('whatsapp-web.js');
const path = require("path");

const runWhatsappClient = () => {
    const waClient = new Client({
        webVersionCache: {
            type: "remote",
            remotePath:
              "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
        },
    });

    waClient.on('qr', (qr) => {
        const jsonData = {
            "qrValue": qr,
        };
        const jsonString = JSON.stringify(jsonData, null, 2); 
        const directoryPath = path.resolve(__dirname, '../data/');
        fs.writeFile(`${directoryPath}/data.json`, jsonString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('JSON file has been created.');
        });
    });

    waClient.on('ready', () => {
        console.log('Client is ready!');
    });

    waClient.initialize();
};

module.exports = runWhatsappClient;