const User = require("../../models/user-model")
const { ObjectId } = require('mongodb');

const sendLiveLocation = async (params) =>{
    const userId = params.userId;
    const latitude = params.latitude;
    const longitude = params.longitude;
    
    try{
        const sentUserLocation = await User.findByIdAndUpdate(userId, {$set: {location:{
            latitude: latitude,
            longitude:longitude,
        }}}, { new: true })

        if (sentUserLocation) {
            console.log('Location updated for user:', sentUserLocation);
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

        changeStream.on('change', async (change) => {
            if(change.documentKey._id == userId){

                const foundUser = await User.findById(userId);
                console.log('userLocationUpdate', { userId,  change:"test"});
                socket.emit('userLocationUpdate', { userId,  data: foundUser});
            }
        });

        socket.changeStream = changeStream;
    }catch (error) {
        console.error('Error while starting to watch user:', error);
    }
}

module.exports = {getLiveLocation, sendLiveLocation}