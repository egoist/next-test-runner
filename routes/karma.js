var path = require('path')
var deepAssign = require('deep-assign')
var Server = require('karma').Server
var pathExists = require('path-exists')
var requireJSON = require('lazy-json').requireJSON
var config = require('../conf/karma.conf.js')

module.exports = function () {
  var customConfigFile = path.join(process.cwd(), '.ntrrc')
  if (pathExists.sync(customConfigFile)) {
    var customConfig = requireJSON(customConfigFile, true)
    config = deepAssign({}, config, customConfig)
  }
  var server = new Server(config, code => {
    console.log('Karma has exited with ' + code)
    process.exit(code)
  })
  server.start()
}
