config = require('./node_modules/ghost/config.example.js');
config.development.server.host = '0.0.0.0';
config.production.server.host = '0.0.0.0';
module.exports = config;
