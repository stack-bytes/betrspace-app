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

const deleteSos = async (req, res) => {
    const deletedSosId = req.query.deletedSosId;
    try{
        const deletedDoc = SosRequest.findByIdAndDelete(deletedSosId);
        if(!deletedDoc){res.status(500).json({message:"Could not delete document"}); return;}
        res.status(200).json({message: "Document delted succesfully"})
        
    } catch (e){
        res.status(500).json({message:'Could not delete sos'})
    }
}

module.exports = {addColaborator, deleteSos}