const { Router } = require('express');
const router = Router();
const controller = require('../controllers/userController.js');

router.get('/findUserProfile', controller.findUserProfile);
router.post('/createUser', controller.createUser);
router.delete('/deleteUser', controller.deleteUser);

module.exports = router;