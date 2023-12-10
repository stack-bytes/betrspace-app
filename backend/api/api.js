const { Router } = require('express');
const router = Router();

const locationApi = require('./routes/locationRoute');
const userApi = require('./routes/userRoute')
const sosApi = require('./controllers/sosController')


router.use('/location', locationApi);
router.use('/users', userApi);
router.use('/sos', sosApi);

module.exports = router;