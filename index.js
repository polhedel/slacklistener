// Main index.js
var common = require ('./common/common');
var slackbots = require('slackbots');
var util = require('util');
var log = require('loglevel');

var eventHandler = require('./handlers/eventHandler');
var messageRouter = require('./routers/messageRouter');

// Define loglevel
log.setDefaultLevel(common.config().loglevel);
// log.setDefaultLevel('debug');

log.info("** starting SlackListener ... **");

// define new slackbot
var bot = new slackbots({
  token: common.config().slack_token         // Put bot token
//name: 'opsbot'                                             // Bot name
});


// handling 'start' event with eventHandler
bot.on('start', eventHandler.handleStart, eventHandler.handlerCallback);

// handling 'open' event
bot.on('open', eventHandler.handleOpen);

// managing 'message' event
bot.on('message', function(data){
    log.info('*** Handling \'message\' event ****');
    log.trace('message data: '+util.inspect(data)+' ***');

    log.debug('message type: '+data.type+' ***');
    messageRouter.route(data, bot);
  // handler.handleMessage
});

// managing 'close' event
bot.on('close', eventHandler.handleClose);

log.info("** ... SlackListener started! **");
