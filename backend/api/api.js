const { Router } = require('express');
const router = Router();

const locationApi = require('./routes/locationRoute');

router.use('/location', locationApi);


module.exports = router;