var karma = require('./routes/karma')
var defaultRoute = require('./routes/defaultRoute')

module.exports = function () {
  switch (argv._[0]) {
    case 'karma':
      return karma()
    default:
      return defaultRoute()
  }
}
