#!/usr/bin/env node
const { clear, input } = require('./utils');
const stashTool = require('./stashTools');
const branchTool = require('./branchTools');
const commitTool = require('./commitTools');

let arg = '';
while (arg !== 'q') {
  arg = input(`
Choose a tool:

(c)ommit tools
(b)ranch tools
(s)tash tools
(q)uit
`);
  clear();
  if (arg === 'c') {
    commitTool();
  } else if (arg === 'b') {
    branchTool();
  } else if (arg === 's') {
    stashTool();
  }
}