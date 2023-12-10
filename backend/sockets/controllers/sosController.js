const SosRequest = require("../../models/sos-model")

const createNewSosAlert = async (socket,params) => {
    console.log("Trying to create new sos alert");
    const newSosRequest = {
        location: {
            latitude: String(params.latitude),
            longitude: String(params.longitude)
        },
        radius: 0, //to implement
        description: params.description,
        
        personInNeedId: params.personInNeedId,
        potentialHelpers: [],
        helperAccepted: null,
        helpSettled: false,

        openDate: new Date(),
        closedDate: null,
    }

    try{
        SosRequest.create(newSosRequest);
        socket.emit('createdSosAlert', newSosRequest)
        console.log("Succesfully created sos alert! ✅");
    } catch(e) {console.log("could not create sos")}
}

const getRealTimeSos = async (socket) => {
    console.log('trying to get latest sos');
    try{
        const changeStream = SosRequest.watch();

        changeStream.on('change', async (change) => {
            const sosDoc = await SosRequest.findById(change.documentKey._id);
            socket.emit('latestSos', sosDoc)
            console.log('latest sos sent! ✅', sosDoc);
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

        if(sosHelp.helpSetteled) {}
        const pothel = sosHelp.potentialHelpers;
        pothel.push(helperId);

        sosHelp.set('potentialHelpers', pother);

        await sosHelp.save();

        console.log('succesfully added helper! ✅')
    } catch(e){
        console.log("Alimentara de sos nu e deschisa! : ",  e)
    }
}

const denyHelp = async (params) =>{
    const deniedHelperId = params.deniedHelperId;
    const personInNeedId = params.personInNeedId;

    try{
        const sosWanted = await SosRequest.findOne({personInNeedId: personInNeedId});
        if(!sosWanted){console.log("could not get denied person sos"); return;}
        
        sosWanted.potentialHelpers = sosWanted.potentialHelpers.filter(helperId => helperId !== deniedHelperId);
        
        sosWanted.save();
    } catch(e){
        console.log("Could nor deny: ", e)
    }
}

const acceptHelp = async (params) => {
    const acceptedHelperId = params.aceeptedHelperId;
    const personInNeedId = params.personInNeedId;

    try{
        const sosWanted = await SosRequest.findOne({personInNeedId: personInNeedId});
        sosWanted.helperAccepted = acceptedHelperId;
        sosWanted.helpSetteled = true;
        sosWanted.save();
    } catch (ex){
        console.log('could not get sos for accept: ', ex)
    }
}

module.exports = {createNewSosAlert, getRealTimeSos}