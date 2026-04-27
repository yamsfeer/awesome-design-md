const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '..', '..', 'design-data.json');

let cachedData = null;

function loadDesigns() {
  if (cachedData) return cachedData;
  if (!fs.existsSync(DATA_PATH)) {
    console.error('Error: design-data.json not found. Run `npm run generate` first.');
    process.exit(1);
  }
  cachedData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  return cachedData;
}

function getCategories(designs) {
  const cats = [...new Set(designs.map(d => d.category))];
  return cats.filter(Boolean).sort();
}

function findDesign(designs, slug) {
  return designs.find(d => d.slug === slug) || null;
}

module.exports = { loadDesigns, getCategories, findDesign };
