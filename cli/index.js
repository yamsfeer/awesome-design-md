const { listCommand } = require('./commands/list');
const { previewCommand } = require('./commands/preview');
const { installCommand } = require('./commands/install');

const VERSION = require('../package.json').version;

const HELP = `
awesome-design v${VERSION} - Curated DESIGN.md collection CLI

Usage:
  awesome-design list [--category <cat>] [--search <term>] [--json]
  awesome-design preview <slug> [--dark]
  awesome-design install <slug> [destination] [--full] [--force]

Commands:
  list, ls      List all available designs
  preview       Open a design preview in your browser
  install       Copy a DESIGN.md to your project

Options:
  --category    Filter by category (list only)
  --search      Search by name or description (list only)
  --json        Output as JSON (list only)
  --dark        Open dark theme preview (preview only)
  --full        Copy entire design directory (install only)
  --force       Overwrite existing files (install only)
  --help        Show this help
  --version     Show version
`;

function parseArgs(argv) {
  const args = { _: [] };
  const rest = argv.slice(2);

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else if (arg === '--version' || arg === '-v') {
      args.version = true;
    } else if (arg === '--category') {
      args.category = rest[++i];
    } else if (arg === '--search') {
      args.search = rest[++i];
    } else if (arg === '--json') {
      args.json = true;
    } else if (arg === '--dark') {
      args.dark = true;
    } else if (arg === '--full') {
      args.full = true;
    } else if (arg === '--force') {
      args.force = true;
    } else if (!arg.startsWith('--')) {
      args._.push(arg);
    }
  }

  return args;
}

const COMMAND_MAP = {
  list: listCommand,
  ls: listCommand,
  preview: previewCommand,
  install: installCommand
};

function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    console.log(HELP.trim());
    return;
  }

  if (args.version) {
    console.log(`awesome-design v${VERSION}`);
    return;
  }

  const command = args._[0];
  args._ = args._.slice(1);

  if (!command) {
    console.log(HELP.trim());
    return;
  }

  const handler = COMMAND_MAP[command];
  if (!handler) {
    console.error(`Unknown command: ${command}. Run with --help for usage.`);
    process.exit(1);
  }

  handler(args);
}

main();
