const SosRequest = require("../../models/sos-model");


const addColaborator = async (req, res) => {
    const colabId = req.query.colabId;
    const sosId = req.query.sosId;

    try{
        let tsos =  await SosRequest.findById(sosId);
        tsos.helperAccepted=colabId;
        tsos.save();
        console.log("Colaborator added to SOS", tsos);
        res.status(200).json({message: "Colaborator added"});
    } catch (e){
        console.log("Could not set collaborator: " , e);
    }
}

module.exports = {addColaborator}