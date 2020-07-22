const prompt = require('prompt-sync')();
const spawnSync = require('child_process').spawnSync;

function cmd(command, options) {
  const result = spawnSync(command, options);
  if (result.status !== 0) {
    process.stderr.write(result.stderr);
    process.exit(result.status);
  } else {
    process.stdout.write(result.stdout);
    process.stderr.write(result.stderr);
  }
}

function clear() {
  cmd('clear');
}

function input(output) {
  console.log(output);
  return prompt(':');
}

module.exports = {
  cmd,
  clear,
  input
}