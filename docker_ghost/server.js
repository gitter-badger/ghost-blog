#!/usr/bin/env node

var ghost = require('ghost');
ghost({
  config: __dirname + '/config.js'
});
