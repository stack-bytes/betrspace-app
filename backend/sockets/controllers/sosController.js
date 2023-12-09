const SosRequest = require("../../models/sos-model")

const createNewSosAlert = async (socket,params) => {
    const newSosRequest = {
        location: {
            latitude: String(params.latitude),
            longitude: String(params.longitude)
        },
        radius: 0, //to implement
        description: params.description,
        
        potentialHelpers: [],
        helperAccepted: null,
        helpSettled: false,

        openDate: new Date(),
        closedDate: null,
    }

    try{
        SosRequest.create(newSosRequest);
        socket.emit('createdSosAlert', newSosRequest)
    } catch(e) {console.log("could not create sos")}
}

const getRealTimeSos = async (socket) => {
    try{
        const changeStream = SosRequest.watch();

        changeStream.on('change', (change) => {
            socket.emit('latestSos', change)
        })
    } catch (e) {console.log('could not get latest: ', e)}
} 

const respondToSos = async (params) => {
    //respond
}

const denyHelp = async (params) =>{

}

module.exports = {createNewSosAlert, getRealTimeSos}