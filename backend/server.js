//server
const express = require('express');
const { manageConnection, debug } = require('./config/mongoCon');
const dotenv = require('dotenv');
const http = require('http')
const socketSetup = require('./sockets/socketio')

dotenv.config();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 4949;
const SOCKETIO_PORT = process.env.SOCKETIO_PORT || 5000;
const SERVER_URL = process.env.SERVER_URL || 'http://192.168.35.111';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainServer = http.createServer(app);


socketSetup()

const api = require('./api/api.js');
const { generateFakeUsers, generateFakeLocations } = require('./scripts/populateDb');


app.use('/api', api);

app.listen(EXPRESS_PORT, async () => {
    console.clear();
    console.log(`🎉 Server running on port ${EXPRESS_PORT} - ${SERVER_URL}:${EXPRESS_PORT} 🎉`);
    await manageConnection.openConnection();
});

socketSetup(SOCKETIO_PORT)