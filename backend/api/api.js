const { Router } = require('express');
const router = Router();

const locationApi = require('./routes/locationRoute');
const userApi = require('./routes/userRoute')

router.use('/location', locationApi);
router.use('/users', userApi);


module.exports = router;