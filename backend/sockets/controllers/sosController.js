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

const applyForSos = async (params) => {
    const sosId = params.sosId;
    const helperId = params.helperId;

    try{
        const sosHelp = await SosRequest.findById(sosId);
        const sosHelper = await SosRequest.findById(helperId);

        if(!sosHelp) {console.log('Nu ai sos!'); return;}
        if(!sosHelper) {console.log('Nu ai ajutor!'); return;}

        const pothel = sosHelp.potentialHelpers;
        pothel.push(helperId);

        sosHelp.set('potentialHelpers', pother);

        await sosHelp.save();

        console.log('succesfully added helper')
    } catch(e){
        console.log("Alimentara de sos nu e deschisa! : ",  e)
    }
}

const denyHelp = async (params) =>{

}

module.exports = {createNewSosAlert, getRealTimeSos}