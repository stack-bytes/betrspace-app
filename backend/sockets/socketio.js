const { getLiveLocation } = require('./controllers/liveLocationController');
const { createNewSosAlert } = require('./controllers/sosController');

const socketSetup = (server) => {
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('🔌 A user connected 🔌');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });


        // ---- User Location FUnctions ----
        socket.on('getLocation', (params) => {
            getLiveLocation(params, io);
        })



        // ---- Sos Functions ----
        socket.on('createSos', (params) => {
            createNewSosAlert(io, params);
        })
    });
};

module.exports = socketSetup;