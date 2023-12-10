const { getLiveLocation, sendLiveLocation } = require('./controllers/liveLocationController');
const { createNewSosAlert, getRealTimeSos } = require('./controllers/sosController');

const socketSetup = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('🔌 A user connected 🔌');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });


        // ---- User Location FUnctions ----
        socket.on('getLocation', (params) => {
            getLiveLocation(params, io);
        })

        socket.on('sendLocation', (params) => {
            sendLiveLocation(params);
        });



        // ---- Sos Functions ----
        
        socket.on('createSos', (params) => {
            createNewSosAlert(io, params);
        })

        socket.on('getLatest', () =>{
            console.log('IM HERE')
            getRealTimeSos(io)
        } )

    });
};

module.exports = socketSetup;