const path = require('path');
const fs = require('fs');
const { loadDesigns, findDesign } = require('../lib/data');
const { openInBrowser } = require('../lib/open');

function previewCommand(args) {
  const slug = args._[0];
  if (!slug) {
    console.error('Error: specify a design slug. Usage: awesome-design preview <slug>');
    process.exit(1);
  }

  const designs = loadDesigns();
  const design = findDesign(designs, slug);

  if (!design) {
    const suggestions = designs
      .map(d => ({ slug: d.slug, dist: levenshtein(slug, d.slug) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 3)
      .map(d => d.slug);
    console.error(`Design "${slug}" not found. Did you mean: ${suggestions.join(', ')}?`);
    process.exit(1);
  }

  const previewFile = args.dark ? design.previewDarkPath : design.previewPath;
  const absolutePath = path.resolve(__dirname, '..', '..', previewFile);

  if (!fs.existsSync(absolutePath)) {
    console.error(`Preview file not found: ${absolutePath}`);
    process.exit(1);
  }

  console.log(`Opening ${design.name} preview${args.dark ? ' (dark)' : ''}...`);
  openInBrowser(absolutePath);
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

module.exports = { previewCommand };
