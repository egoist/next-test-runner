var deepAssign = require('deep-assign')
var Server = require('karma').Server
var loadConfig = require('../lib/loadConfig')
var config = require('../conf/karma.conf.js')

module.exports = function () {
  var customConfig = loadConfig().karma
  config = deepAssign({}, config, customConfig)
  if (argv.w || argv.watch) {
    config.autoWatch = true
    config.singleRun = false
  }
  var server = new Server(config, code => {
    console.log('Karma has exited with ' + code)
    process.exit(code)
  })
  server.start()
}
