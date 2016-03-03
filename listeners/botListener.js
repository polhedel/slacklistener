// botListener.js
var slackbots = require('slackbots');

function startBot(token, botname, eventHandler){
  console.log("**** starting SlackListener ... ****");

  var bot = new slackbots({
    token:  token,      // Put bot token
    name: botname       // Bot name
  });
/**
  bot.on('start', eventHandler.handleStart(data));

  bot.on('message', eventHandler.handleMessage(data));
*/
  console.log("**** ... SlackListener started! ****");
}

export.startBot = startBot;

/**

// define new slackbot

//var router = {};
var handler = {};

// handling 'start' event
bot.on('start', function () {
    handler.handleStart(null, 'message', function(err){
      console.log('**** Calling callback');
    });
});

// handling 'open' event
bot.on('open', function(){
  handler.handleOpen();
});

// managing 'message' event
bot.on('message', function(){
  handler.handleMessage();
});

// managing 'open' event
bot.on('close', function(){
  handler.handleClose();
});


*/
