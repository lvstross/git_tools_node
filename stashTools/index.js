const { cmd, clear, input } = require('../utils');

function stashTool() {
  let arg = '';
  while (arg !== 'e') {
    arg = input(`
Choose a mode:
  
(s)ave mode: Save a stash
(a)pply mode: Apply a stash
(v)iew mode: View a stash
(d)rop mode: Drop a stash
  
(e)xit tool
(q)uit
`);
    clear();
    if (arg === 's') {
      cmd('echo', ['s was used']);
    } else if (arg === 'a') {
      cmd('echo', ['a was used']);
    } else if (arg === 'v') {
      cmd('echo', ['v was used']);
    } else if (arg === 'd') {
      cmd('echo', ['d was used']);
    } else if (arg === 'q') {
      process.exit();
    }
  }
}

module.exports = stashTool;
