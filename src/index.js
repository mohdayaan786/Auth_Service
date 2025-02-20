const EventEmitter = require('events');

// Increase the maximum number of listeners
EventEmitter.defaultMaxListeners = 20;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {port} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');


const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

prepareAndStartServer();