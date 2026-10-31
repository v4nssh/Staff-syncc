const { spawn } = require('child_process');
const path = require('path');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';
const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';

// Detect whether user initiated with pnpm or npm
const userAgent = process.env.npm_config_user_agent || '';
const bin = userAgent.includes('pnpm') ? pnpmCmd : npmCmd;
const isPnpm = bin === pnpmCmd;

console.log('\x1b[36m%s\x1b[0m', '================================================');
console.log('\x1b[36m%s\x1b[0m', '⚡ Starting StaffSync Full-Stack Development ⚡');
console.log('\x1b[36m%s\x1b[0m', '================================================');
console.log(`Using package manager: ${isPnpm ? 'pnpm' : 'npm'}\n`);

// Backend process
const serverArgs = isPnpm
  ? ['--filter', 'staffsync-server', 'dev']
  : ['--prefix', 'server', 'run', 'dev'];

const server = spawn(bin, serverArgs, {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
  shell: false,
});

// Frontend process
const clientArgs = isPnpm
  ? ['--filter', 'staffsync-client', 'dev']
  : ['--prefix', 'client', 'run', 'dev'];

const client = spawn(bin, clientArgs, {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
  shell: false,
});

const cleanup = (code = 0) => {
  try {
    if (isWin) {
      if (server && server.pid) spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { shell: false });
      if (client && client.pid) spawn('taskkill', ['/pid', String(client.pid), '/f', '/t'], { shell: false });
    } else {
      if (server) server.kill('SIGTERM');
      if (client) client.kill('SIGTERM');
    }
  } catch (e) {}
  process.exit(code);
};

process.on('SIGINT', () => cleanup(0));
process.on('SIGTERM', () => cleanup(0));

server.on('exit', (code) => {
  if (code && code !== 0) {
    console.error(`Backend process terminated with code ${code}`);
  }
});

client.on('exit', (code) => {
  if (code && code !== 0) {
    console.error(`Frontend process terminated with code ${code}`);
  }
});
