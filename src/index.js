const EventEmitter = require('events');

// Increase the maximum number of listeners
EventEmitter.defaultMaxListeners = 20;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const UserService = require('./services/user-service');
const {port} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');


const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(port, async() => {
        console.log(`Server is running on port ${port}`);
        //const userService = new UserService();
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtb2hkYXlhYW44MDcxQGdtYWlsLmNvbSIsImlhdCI6MTc0MTUwNDA0NCwiZXhwIjoxNzQxNTA3NjQ0fQ.ygCoOxexEnsvXiGFlm4hWKlob_5airrTvQM60nC5eEU";
        //const user = userService.verifyToken(token);
        //console.log(user);
    });
};

prepareAndStartServer();