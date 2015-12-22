#!/usr/bin/env node
require('shelljs/global')
var minimist = require('minimist')
global.argv = minimist(process.argv.slice(2), {'--': true})

var runner = require('./')
runner(argv)
