const fs = require('fs');
const { Client, LegacySessionAuth } = require('whatsapp-web.js');
var qrcode = require('qrcode-terminal');
const path = require("path");

const SESSION_FILE_PATH = `./wtf-session.json`;
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionCfg = require(SESSION_FILE_PATH);
}


const waClient = new Client({
    webVersionCache: {
        type: "remote",
        remotePath:
          "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },

});

const runWhatsappClient = (app) => { 

    waClient.on('message', msg => {
      if (msg.body == '!ping') {
          msg.reply('pong');
      }
  });
    var today  = new Date();
    var now = today.toLocaleString();

            waClient.on('qr', (qr) => {
              const jsonData = {
                  "qrValue": qr,
              };
              const jsonString = JSON.stringify(jsonData, null, 2); 
              const directoryPath = path.resolve(__dirname, '../data/');
              qrcode.generate(qr, {small: true});
              fs.writeFile(`${directoryPath}/data.json`, jsonString, 'utf8', (err) => {
                  if (err) {
                      console.error('Error writing file:', err);
                      return;
                  }
                  console.log('JSON file has been created.');
              });
          });

          
            waClient.on('ready', () => {
              console.log('message', `${now} WhatsApp is ready!`);
            });

    waClient.initialize();

          
            waClient.on('disconnected', function() {
              waClient.destroy();
              waClient.initialize();
            });
    // });
};

const sendMessage = async (number, message) => {
  try {
    const valNum = `${number}@c.us`;
      const response = await waClient.sendMessage(valNum, message);
      return {
          error: false,
          data: {
              message: 'Pesan terkirim',
              meta: response,
          },
      };
  } catch (error) {
      return {
          error: true,
          data: {
              message: 'Error mengirim pesan',
              meta: error.message,
          },
      };
  }
};



module.exports = {runWhatsappClient, sendMessage};