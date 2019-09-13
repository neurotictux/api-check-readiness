const { spawn } = require('child_process')
spawn('yarn', [''], {
  stdio: 'inherit',
  cwd: 'client/react',
  shell: true
})
spawn('npm', ['start'], {
  stdio: 'inherit',
  cwd: 'client/react',
  shell: true
})