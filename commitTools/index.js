const { cmd, clear, input } = require('../utils');

function commitTool() {
  let arg = '';
  while (arg !== 'e') {
    arg = input(`
Choose a mode:

(a)dd mode: Add files to staging
(d)iscard mode: Discard unstaged changes
(r)eset mode: Reset files from staging
(c)ommit mode: Commit staged changes

(e)xit tool
(q)uit
`);
    clear();
    if (arg === 'a') {
      cmd('echo', ['a was used']);
    } else if (arg === 'd') {
      cmd('echo', ['d was used']);
    } else if (arg === 'r') {
      cmd('echo', ['r was used']);
    } else if (arg === 'c') {
      cmd('echo', ['c was used']);
    } else if (arg === 'q') {
      process.exit();
    }
  }
}

module.exports = commitTool;
