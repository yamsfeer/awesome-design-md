const { loadDesigns, getCategories } = require('../lib/data');

function listCommand(args) {
  const designs = loadDesigns();

  let filtered = designs;

  if (args.category) {
    filtered = filtered.filter(d => d.category === args.category);
    if (filtered.length === 0) {
      const categories = getCategories(designs);
      console.error(`No designs in category "${args.category}". Available categories:`);
      categories.forEach(c => console.error(`  - ${c}`));
      process.exit(1);
    }
  }

  if (args.search) {
    const term = args.search.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(term) ||
      d.description.toLowerCase().includes(term) ||
      d.slug.toLowerCase().includes(term)
    );
    if (filtered.length === 0) {
      console.error(`No designs matching "${args.search}".`);
      process.exit(1);
    }
  }

  if (args.json) {
    const slim = filtered.map(({ designMd, ...rest }) => rest);
    console.log(JSON.stringify(slim, null, 2));
    return;
  }

  const nameW = 18;
  const slugW = 18;
  const catW = 26;

  console.log(
    'Name'.padEnd(nameW) +
    'Slug'.padEnd(slugW) +
    'Category'.padEnd(catW) +
    'Colors'.padEnd(8) +
    'Description'
  );
  console.log('-'.repeat(90));

  for (const d of filtered) {
    const name = d.name.length > nameW - 1 ? d.name.slice(0, nameW - 2) + '..' : d.name;
    const slug = d.slug.length > slugW - 1 ? d.slug.slice(0, slugW - 2) + '..' : d.slug;
    const cat = d.category.length > catW - 1 ? d.category.slice(0, catW - 2) + '..' : d.category;
    const colors = String(d.colors ? d.colors.length : 0).padEnd(8);
    const desc = d.description.length > 40 ? d.description.slice(0, 38) + '..' : d.description;

    console.log(name.padEnd(nameW) + slug.padEnd(slugW) + cat.padEnd(catW) + colors + desc);
  }

  console.log('');
  console.log(`  ${filtered.length} design${filtered.length !== 1 ? 's' : ''} total`);
}

module.exports = { listCommand };
