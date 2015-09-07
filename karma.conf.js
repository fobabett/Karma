// Karma configuration
// Generated on Mon Sep 07 2015 13:25:52 GMT-1000 (HST)
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    'test/mocha.conf.js',
    './test/controllerSpec.js'
  ]);
  logLevel: config.LOG_INFO,

  
  config.set(conf);  
}
