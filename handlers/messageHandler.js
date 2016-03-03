//messageHandler.js
var log = require('loglevel');
var util = require('util');

function ignore(data, bot){
  log.debug('***** Ingnoring message received *****')
  log.debug('***** Ignored message data' + util.inspect(data) + '*****');
}

function greeting(data, bot){
  log.debug('***** Printing greeting message *****');

  if( process.env.NODE_ENV == common.DEV_MODE){
    bot.postMessageToUser('golcinab', 'What\'s up!\nOPSBOT enabled. If you need some help, type \'@opsbot /help\'', {as_user:'true'});
  }else{
    log.info(' TODO: Print greeting');
  }
  // bot.postMessageToUser('golcinab', 'OPSBOT enabled. If you need some help, type \'@opsbot /help\'', {as_user:'true'});
}

function helping(data, bot){
  log.debug('***** Printing help message *****');

  if( process.env.NODE_ENV == common.DEV_MODE){
    bot.postMessageToUser('golcinab', 'Searching help info. Please wait...', {as_user:'true'});
  }else{
    log.info(' TODO: Print greeting');
  }

}

exports.ignore = ignore;
exports.greeting = greeting;
exports.helping = helping;
