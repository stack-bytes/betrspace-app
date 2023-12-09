const { getLiveLocation } = require('./controllers/liveLocationController');
const { createNewSosAlert, getRealTimeSos } = require('./controllers/sosController');

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
            console.log('hello');
            createNewSosAlert(io, params);
        })

        socket.on('getLatest', () =>{
            getRealTimeSos(io)
        } )

    });
};

module.exports = socketSetup;