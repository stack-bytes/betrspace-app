const { Router } = require('express');
const router = Router();
const controller = require('../controllers/sosController');

router.post('/addColaborator', controller.addColaborator);
router.delete('/removeSos', controller.deleteSos);

module.exports = router;