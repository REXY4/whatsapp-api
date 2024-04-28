require('dotenv').config()
const express = require("express");
const qrData = require("./src/data/data.json")
const runWhatsappClient = require('./src/helpers/wa-client');
const app = express();

runWhatsappClient()
console.log("check datas ", qrData.qrValue )
app.listen(process.env.APP_PORT,()=>console.log(`Whatsapp api running on Port ${process.env.APP_PORT}`));