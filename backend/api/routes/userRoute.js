const { Router } = require('express');

const router = Router();
const controller = require('../controllers/userController.js');

router.get('/getUsers', controller.getUsers);
router.post('/createUser', controller.creatrUser);
router.get("/getUserLocaton", controller.getUserLocation)


module.exports = router;