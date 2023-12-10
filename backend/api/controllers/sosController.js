const SosRequest = require("../../models/sos-model");


const addColaborator = async (req, res) => {
    const colabId = req.query.colabId;
    const sosId = req.query.sosId;

    try{
        let tsos =  await SosRequest.findById(sosId);
        tsos.helperAccepted=colabId;
        tsos.save();
    } catch (e){
        console.log("Could not set collaborator: " , e);
    }
}

module.exports = {addColaborator}