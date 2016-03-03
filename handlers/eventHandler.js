// eventHandler.js
var log = require('loglevel');
var util = require('util');

var router = require('../routers/messageRouter');

function handlerCallback(err, data){
    if( err ){ return log.error('--- ERROR Handling \'start\' event: '+err);}

    return (log.info('*** Handled \'start\' event ****'));
}

// handling 'start' event
function handleStart(data, callback){
  // if(err){ return log.error('--- handleStartError: '+err); }

  log.info('*** Handling \'start\' event ****');
  log.trace('\t-> start data: '+util.inspect(data)+' ***');

}

// handling 'open' event
function handleOpen(data){
  // if(err){ return log.error('--- handleOpenError: '+err); }

  log.info('*** Handling \'open\' event ****');
  log.trace('\t-> open data: '+util.inspect(data)+' ***');
}

// handling 'message' event
function handleMessage(data){
  // if(err){ return log.error('--- handleMessageError: '+util.inspect(err)); }

  log.info('*** Handling \'message\' event ****');
  log.info('\t-> message type: \''+data.type+'\' and subtype: \''+data.subtype+'\' ***');
  log.trace('\t-> message data: '+util.inspect(data)+' ***');

  router.route(data.type, data);
}

function handleClose(data){
  // if(err){ return log.error('--- handleCloseError: '+err); }

  log.info('*** Handling \'close\' event ****');
  log.trace('\t-> close data: '+util.inspect(data)+' ***');
}

// exports fuctions
exports.handlerCallback = handlerCallback;
exports.handleStart = handleStart;
exports.handleOpen = handleOpen;
exports.handleMessage = handleMessage;
exports.handleClose = handleClose
