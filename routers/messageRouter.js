// MessageRouter: route message to message handler
var config = require('../config/config.json');
var log = require ('loglevel');
var util = require('util');

// Setting messageHandlers
var messageHandler = require('../handlers/messageHandler');
var messageHandlerList = {}
messageHandlerList[config.opsbot_id] = messageHandler.ignore;      //opsbot ingnored
messageHandlerList['reconnect_url'] = messageHandler.ignore;  //reconnect_msgs
messageHandlerList['user_typing'] = messageHandler.ignore;
messageHandlerList['hello'] = messageHandler.greeting;
messageHandlerList['message_undefined'] = messageHandler.greeting;

function route(data, bot){
  // eventsType: start, message, open, close

  log.debug('**** Routing message \''+ data.type + '\' ****');
  log.debug('**** Routing message data' + util.inspect(data) + '****');

  if (typeof messageHandlerList[data.user] === 'function'){
    messageHandlerList[data.user](data, bot);;
  }else if (typeof messageHandlerList[data.type] === 'function') {
    messageHandlerList[data.type](data, bot);
  }else if ( data.subtype &&
      typeof messageHandlerList[data.type + '_' + data.subtype] === 'function') {
    messageHandlerList[data.type + '_' + data.subtype](data, bot);
  }else{
    log.error('---- Error routing message, handler \''+data.type+'\' with subtype \''+data.subtype+'\' not found! ----');
    log.debug('**** Routing message data' + util.inspect(data) + '****');

    bot.postMessageToUser(config.error_channel_id,
      'ERROR: Routing message. Handler \''+data.type+'\' with subtype \''+data.subtype+'\' not found!', {as_user:'true'});

    if( log.getlevel() <= log.levels.DEBUG){
      bot.postMessageToUser(config.error_channel_id,
        'Message data: '+util.inspect(data), {as_user:'true'});
    }
  }
}

exports.route = route;
