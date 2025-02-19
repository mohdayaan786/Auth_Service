const express = require('express');
const app = express();
const {port} = require('./config/serverConfig');

const prepareAndStartServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

prepareAndStartServer();