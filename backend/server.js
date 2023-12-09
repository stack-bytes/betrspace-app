//server
const express = require('express');
const { manageConnection, debug } = require('./config/mongoCon');
const dotenv = require('dotenv');
dotenv.config();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 4949;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require('./config/socketio.js');
const api = require('./api/api.js');
const { generateFakeUsers, generateFakeLocations } = require('./scripts/populateDb');


app.use('/api', api);

app.listen(EXPRESS_PORT, async () => {
    console.clear();
    console.log(`🎉 Server running on port ${EXPRESS_PORT} - ${SERVER_URL}:${EXPRESS_PORT} 🎉`);
    await manageConnection.openConnection();
});