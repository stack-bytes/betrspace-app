const User = require("../../models/user-model")
const { ObjectId } = require('mongodb');

const sendLiveLocation = async (params) =>{
    const userId = params.userId;
    const latitude = params.latitud;
    const longitude = params.longitude;
    
    try{
        const sentUserLocation = User.findByIdAndUpdate(userId, {$set: {location:{
            latitude: latitude,
            longitude:longitude,
        }}}, { new: true })

        if (updatedDocument) {
            console.log('Document updated:', sentUserLocation);
          } else {
            console.log('Document not found');
          }
        } catch (error) {
          console.error('Error updating document:', error);
        }
}

const getLiveLocation = async (params, socket) => {
    const userId = params.userId;   
    console.log(userId);
    try{
        console.log(userId);
        const user = await User.findById(userId);

        if (!user) {
            console.log(`User not found`);
            return;
        }
        const changeStream = User.watch();

        changeStream.on('init', (change) => {
            if(change.documentKey._id == userId){
                socket.emit('userLocationUpdate', { userId,  change});
            }
        })

        changeStream.on('change', (change) => {
            if(change.documentKey._id == userId){
                console.log('userLocationUpdate', { userId,  change:"test"});
                socket.emit('userLocationUpdate', { userId,  change});
            }
        });

        socket.changeStream = changeStream;
    }catch (error) {
        console.error('Error while starting to watch user:', error);
    }
}

module.exports = {getLiveLocation, sendLiveLocation}