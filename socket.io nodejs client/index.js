// Don't forget to run npm install socket.io-client
const io = require('socket.io-client');

// Connect to the server
const WebSocketClient = io('http://localhost:3000');

// Do something on connect
WebSocketClient.on('connect', () => {
    console.log('connected to server');
});

// Do something on disconnect
WebSocketClient.on('disconnect', () => {
    console.log('disconnected from server');
});

// Do something on custom packet
WebSocketClient.on('packet123', (StringData123) => {
    console.log('String: ' + StringData123);
})