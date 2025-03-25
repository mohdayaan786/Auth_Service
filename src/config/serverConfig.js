const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
  port: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY
};

module.exports = serverConfig;