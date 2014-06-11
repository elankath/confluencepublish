#!/usr/bin/env node
"use strict";
var confpub=require('./index.js');
console.log(confpub);
var pub = confpub.createPublisher('bingo');
pub.debug();





