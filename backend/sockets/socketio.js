const { getLiveLocation } = require('./controllers/liveLocationController');

const socketSetup = (server) => {
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('🔌 A user connected 🔌');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        socket.on('getLocation', (params) => {
            getLiveLocation(params, io);
        })
    });
};

module.exports = socketSetup;