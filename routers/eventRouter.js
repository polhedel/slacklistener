// EventRouter: routes events received to handlers.
var log = require ('loglevel');

function route(event){
  // eventsType: start, message, open, close
  log.debug('**** Received '+ event +' to route ****');
}

exports.route = route;
/**
bot.on(eventType, function () {
  console.log("**** Received 'start' event ****");
});

// managing 'message' event
bot.on('message', function () {
  console.log("**** Received 'message' event ****");
});

// managing 'open' event
bot.on('open', function(){
  console.log("**** Received 'open' event ****");
});

// managing 'open' event
bot.on('close', function(){
  console.log("**** Received 'close' event ****");
});
*/
