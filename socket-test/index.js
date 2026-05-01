import io from 'socket.io-client';

const socket = io('ws://129.146.123.55:3000');
socket.connect();

socket.on('connect', () => {
  console.log('Connected!');
  socket.emit('test', 'Hello hihihi!');
  console.log('Sent!');
});

socket.on('connect_error', (error) => {
  console.error('Socket.IO Connection Error:', error);
});

setInterval(() => {
  socket.emit("jover", 'Hello hihihi!');
  console.log('Sent!');
}, 1000);