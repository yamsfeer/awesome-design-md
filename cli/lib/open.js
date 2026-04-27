const { execSync } = require('child_process');
const path = require('path');

function openInBrowser(filePath) {
  const absolutePath = path.resolve(filePath);
  const fileUrl = `file://${absolutePath}`;

  const commands = {
    darwin: `open "${absolutePath}"`,
    linux: `xdg-open "${absolutePath}"`,
    win32: `start "" "${absolutePath}"`
  };

  const cmd = commands[process.platform];
  if (!cmd) {
    console.log(`Unsupported platform. Open manually: ${fileUrl}`);
    return false;
  }

  try {
    execSync(cmd, { stdio: 'ignore' });
    return true;
  } catch {
    console.log(`Could not open browser. Open manually: ${fileUrl}`);
    return false;
  }
}

module.exports = { openInBrowser };
