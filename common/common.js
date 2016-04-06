//Common functions

var configfile = require('../config/config.json');

const DEV_MODE = 'development';
const PRO_MODE = 'production';

function loadConfig (){
  var node_env = process.env.NODE_ENV || DEV_MODE;
  return configfile[node_env];
}

exports.config = loadConfig;
