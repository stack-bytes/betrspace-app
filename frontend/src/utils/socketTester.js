const io = require('socket.io-client');

const serverUrl = 'http://localhost:5000';

const socket = io(serverUrl, {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('Connected to the server');
  
  const params = { userId: '6573da517e0b1dcd1f0e843d' };


  socket.emit('getLocation', params);
});


socket.on('userLocationUpdate', (location) => {
  console.log('Received live location update:', location);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});
