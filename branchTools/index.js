const { cmd, clear, input } = require('../utils');

function branchTool() {
  let arg = '';
  while (arg !== 'e') {
    arg = input(`
Choose a mode:

(ck)eckout mode: Checkout a branch
(n)ew branch mode: Create a new branch
(d)elete mode: Delete a branch

(e)xit tool
(q)uit
`);
    clear();
    if (arg === 'ck') {
      cmd('echo', ['ck was used']);
    } else if (arg === 'n') {
      cmd('echo', ['n was used']);
    } else if (arg === 'd') {
      cmd('echo', ['d was used']);
    } else if (arg === 'q') {
      process.exit();
    }
  }
}

module.exports = branchTool;
