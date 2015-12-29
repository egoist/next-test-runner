var path = require('path')
var pathExists = require('path-exists')
var requireJSON = require('lazy-json').requireJSON

module.exports = function () {
  var config = {}
  var configFile = path.join(process.cwd(), '.ntrrc')
  if (pathExists.sync(configFile)) {
    config = requireJSON(configFile, true)
  }
  return config
}
