const { Router } = require('express');
const router = Router();
const controller = require('../controllers/sosController');

router.post('/addColaborator', controller.addColaborator);

module.exports = router;