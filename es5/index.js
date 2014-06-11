#!/usr/bin/env node
//require('traceur');
//require('bin/traceur-runtime.js');
require('traceur-runtime');
var confpub;
confpub=require('./libimpl.js');
console.log("confpub from libimpl.js = ", confpub);
exports = module.exports = confpub;
