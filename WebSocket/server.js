const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', function (ws) {
   ws.on('message', function (data) {
       console.log(data);
   }) ;
   ws.send('来自服务端');
});

