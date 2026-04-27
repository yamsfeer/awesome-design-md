const path = require('path');
const fs = require('fs');
const { loadDesigns, findDesign } = require('../lib/data');

function installCommand(args) {
  const slug = args._[0];
  if (!slug) {
    console.error('Error: specify a design slug. Usage: awesome-design install <slug> [destination]');
    process.exit(1);
  }

  const designs = loadDesigns();
  const design = findDesign(designs, slug);

  if (!design) {
    console.error(`Design "${slug}" not found. Run \`awesome-design list\` to see available designs.`);
    process.exit(1);
  }

  const destination = args._[1] || process.cwd();
  const destAbs = path.resolve(destination);

  if (!fs.existsSync(destAbs)) {
    fs.mkdirSync(destAbs, { recursive: true });
  }

  if (args.full) {
    const srcDir = path.resolve(__dirname, '..', '..', 'design-md', slug);
    const destDir = path.join(destAbs, slug);

    if (fs.existsSync(destDir) && !args.force) {
      console.error(`Directory already exists: ${destDir}. Use --force to overwrite.`);
      process.exit(1);
    }

    fs.cpSync(srcDir, destDir, { recursive: true, force: !!args.force });
    console.log(`Installed ${design.name} (full) to ${destDir}`);
  } else {
    const srcFile = path.resolve(__dirname, '..', '..', 'design-md', slug, 'DESIGN.md');
    const destFile = path.join(destAbs, 'DESIGN.md');

    if (!fs.existsSync(srcFile)) {
      console.error(`DESIGN.md not found for ${design.name}.`);
      process.exit(1);
    }

    if (fs.existsSync(destFile) && !args.force) {
      console.error(`File already exists: ${destFile}. Use --force to overwrite.`);
      process.exit(1);
    }

    fs.copyFileSync(srcFile, destFile);
    console.log(`Installed DESIGN.md (${design.name}) to ${destFile}`);
  }
}

module.exports = { installCommand };
