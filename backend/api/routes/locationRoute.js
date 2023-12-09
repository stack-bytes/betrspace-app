const { Router } = require('express');

const router = Router();
const controller = require('../controllers/locationController.js');


router.post('/addLocation', controller.createNewLocation)
router.delete('/deleteLocations', controller.deleteLocations);





module.exports = router;