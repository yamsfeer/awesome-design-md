#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取所有设计方案目录
function getDesignDirectories() {
  const designMdPath = path.join(__dirname, '..', 'design-md');
  const dirs = fs.readdirSync(designMdPath, { withFileTypes: true });
  return dirs.filter(d => d.isDirectory()).map(d => d.name);
}

// 从 README.md 提取类别和描述
function parseReadme() {
  const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf-8');
  const lines = readme.split('\n');

  const designInfo = {};
  let currentCategory = null;

  for (const line of lines) {
    const categoryMatch = line.match(/^### (.+)$/);
    if (categoryMatch) {
      currentCategory = categoryMatch[1];
      continue;
    }

    const designMatch = line.match(/^- \[\*\*(.+?)\*\*\]\((https?:\/\/getdesign\.md\/([^\/\)]+))/) ;
    if (designMatch && currentCategory) {
      const name = designMatch[1];
      const slug = designMatch[3];
      const descMatch = line.match(/\) - (.+)$/);
      const description = descMatch ? descMatch[1] : 'Design system preview';

      designInfo[slug] = {
        name,
        category: currentCategory,
        description
      };
    }
  }

  return designInfo;
}

// 从 preview.html 提取 CSS 变量
function extractVariables(htmlPath) {
  if (!fs.existsSync(htmlPath)) {
    return { colors: [], fonts: [] };
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');
  const colors = [];
  const fonts = [];

  const rootMatch = html.match(/:root\s*{([^}]+)}/s);
  if (rootMatch) {
    const varLines = rootMatch[1].split('\n');

    for (const line of varLines) {
      const colorMatch = line.match(/--([\w-]+):\s*(#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\))/);
      if (colorMatch) {
        colors.push({
          name: colorMatch[1],
          value: colorMatch[2]
        });
      }

      const fontMatch = line.match(/--([\w-]*(?:font|Font|family|Family)):\s*([^;]+);/);
      if (fontMatch) {
        fonts.push({
          name: fontMatch[1].trim(),
          value: fontMatch[2].trim()
        });
      }
    }
  }

  return { colors, fonts };
}

// 读取 DESIGN.md 内容
function readDesignMd(slug) {
  const designMdPath = path.join(__dirname, '..', 'design-md', slug, 'DESIGN.md');
  if (fs.existsSync(designMdPath)) {
    return fs.readFileSync(designMdPath, 'utf-8');
  }
  return '';
}

// 主函数
function generateData() {
  const directories = getDesignDirectories();
  const designInfo = parseReadme();
  const designData = [];

  const categoryOrder = [
    'AI & Machine Learning',
    'Developer Tools & Platforms',
    'Infrastructure & Cloud',
    'Design & Productivity',
    'Fintech & Crypto',
    'Enterprise & Consumer',
    'Car Brands'
  ];

  const categorized = {};

  for (const slug of directories) {
    const previewPath = path.join(__dirname, '..', 'design-md', slug, 'preview.html');
    const variables = extractVariables(previewPath);
    const designMdContent = readDesignMd(slug);

    const info = designInfo[slug] || {
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
      category: 'Other',
      description: 'Design system preview'
    };

    if (!categorized[info.category]) {
      categorized[info.category] = [];
    }

    categorized[info.category].push({
      name: info.name,
      slug: slug,
      category: info.category,
      description: info.description,
      previewPath: `design-md/${slug}/preview.html`,
      previewDarkPath: `design-md/${slug}/preview-dark.html`,
      colors: variables.colors.slice(0, 15),
      fonts: variables.fonts.slice(0, 5),
      designMd: designMdContent
    });
  }

  for (const category of categoryOrder) {
    if (categorized[category]) {
      designData.push(...categorized[category]);
    }
  }

  for (const category of Object.keys(categorized)) {
    if (!categoryOrder.includes(category)) {
      designData.push(...categorized[category]);
    }
  }

  // 生成 JSON 文件（保留，供其他用途）
  const jsonPath = path.join(__dirname, '..', 'design-data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(designData, null, 2));

  // 生成 JS 文件（直接嵌入数据，无需 fetch）
  const jsPath = path.join(__dirname, '..', 'assets', 'js', 'design-data.js');
  const jsContent = `// Auto-generated design data
const DESIGNS_DATA = ${JSON.stringify(designData, null, 2)};
`;
  fs.writeFileSync(jsPath, jsContent);

  console.log(`✅ Generated metadata for ${designData.length} designs`);
  console.log(`📝 JSON: ${jsonPath}`);
  console.log(`📝 JS: ${jsPath}`);
}

generateData();
