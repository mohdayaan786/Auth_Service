const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
  port: process.env.PORT,
};

module.exports = serverConfig;