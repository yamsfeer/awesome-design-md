#!/usr/bin/env node

const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 获取所有设计方案
function getDesigns() {
  const designMdPath = path.join(__dirname, '..', 'design-md');
  const dirs = fs.readdirSync(designMdPath, { withFileTypes: true });
  return dirs.filter(d => d.isDirectory()).map(d => d.name);
}

// 生成截图
async function generateScreenshots() {
  const designs = getDesigns();
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const thumbnailsDir = path.join(screenshotsDir, 'thumbnails');
  const fullDir = path.join(screenshotsDir, 'full');

  // 确保目录存在
  if (!fs.existsSync(thumbnailsDir)) fs.mkdirSync(thumbnailsDir, { recursive: true });
  if (!fs.existsSync(fullDir)) fs.mkdirSync(fullDir, { recursive: true });

  console.log(`📸 Starting screenshot generation for ${designs.length} designs...\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 }
  });
  const page = await context.newPage();

  for (const slug of designs) {
    try {
      console.log(`Processing ${slug}...`);

      // 亮色主题
      const lightPath = path.join(__dirname, '..', 'design-md', slug, 'preview.html');
      const lightUrl = `file://${lightPath}`;

      await page.goto(lightUrl, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500); // 等待样式加载

      const fullLightPath = path.join(fullDir, `${slug}-light.png`);
      await page.screenshot({ path: fullLightPath, fullPage: false });

      // 生成缩略图
      const thumbLightPath = path.join(thumbnailsDir, `${slug}-light.png`);
      await sharp(fullLightPath)
        .resize(300, 200, { fit: 'cover' })
        .toFile(thumbLightPath);

      // 暗色主题
      const darkPath = path.join(__dirname, '..', 'design-md', slug, 'preview-dark.html');
      const darkUrl = `file://${darkPath}`;

      await page.goto(darkUrl, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);

      const fullDarkPath = path.join(fullDir, `${slug}-dark.png`);
      await page.screenshot({ path: fullDarkPath, fullPage: false });

      // 生成缩略图
      const thumbDarkPath = path.join(thumbnailsDir, `${slug}-dark.png`);
      await sharp(fullDarkPath)
        .resize(300, 200, { fit: 'cover' })
        .toFile(thumbDarkPath);

      console.log(`  ✅ Generated screenshots for ${slug}`);

    } catch (error) {
      console.error(`  ❌ Failed to process ${slug}:`, error.message);
    }
  }

  await browser.close();
  console.log(`\n✨ Screenshot generation complete!`);
  console.log(`   Full size: ${fullDir}`);
  console.log(`   Thumbnails: ${thumbnailsDir}`);
}

// 执行
generateScreenshots().catch(console.error);
