# whatshapp api module open source

## You can install whit :
```
npm i @rexy4/wa-api
```
```
yarn add @rexy4/wa-api
```


## Example Use With express js : 
```
const {runWhatsappClient, qrValue, sendMessage} = require("@rexy4/wa-api")
const express = require("express");
const app = express();

runWhatsappClient();
app.use(express.json())

app.post("/message", async (req, res)=>{
     const sendMessages = await sendMessage(req.body.phone, req.body.message);
    res.send({
        status : "success",
        statusCode : 200,
        message : sendMessages,
    })
})

app.listen(4000, ()=>console.log(`Running on port ${4000}`))
```