// Testing for @slack/client api
var common = require ('../common/common');
var util = require('util');

var RtmClient = require('@slack/client').RtmClient;
var token = common.config().slack_token || '';

var rtm = new RtmClient(
  common.config().slack_token || '',
  {
    logLevel: common.config().loglevel,
    proxyUrl: 'http://10.110.8.42:8080'
  }
);

rtm.start();

var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

rtm.on(CLIENT_EVENTS.RTM_AUTHENTICATED, function(rtmStartData){
  console.log('RTM_AUTHENTICATED. Data:'+ util.inspect(rtmStartData));
});
