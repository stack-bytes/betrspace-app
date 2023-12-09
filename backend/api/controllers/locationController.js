const mongoose = require('mongoose');
const Location = require('../../models/location-model'); 

const createNewLocation = async (req, res) => {
    const {
        latitude,
        longitude,
        radius,
        name,
        description,
        rating,
        benefits,
        photo
    } = req.body;

    try {
        const newLocation = new Location({
            name,
            description,
            photo,
            rating,
            benefits,
            location: {
                latitude,
                longitude,
                radius
            }
        });

        const savedLocation = await newLocation.save();

        res.status(201).json({
            message: 'Location created successfully',
        });
    } catch (error) {
        console.error('Error creating location:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const deleteLocations = async(req, res) => {
    const locationIds = req.body.locations;
    try{
    await Location.deleteMany({ _id: { $in: locationIds } })
    res.status(201).json({
        message: 'Locations deleted successfully',
    });
    } catch(error){
        console.error('Error creating location:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

module.exports = {createNewLocation, deleteLocations};
