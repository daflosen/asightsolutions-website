#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG/JPG to WebP with max 200KB file size
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../public/images'),
  outputDir: path.join(__dirname, '../public/images/optimized'),
  maxFileSizeKB: 200,
  formats: ['.png', '.jpg', '.jpeg'],
  webpQuality: 80, // Starting quality
  minQuality: 60,  // Minimum acceptable quality
};

// Color output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
};

async function ensureDirectory(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    console.log(`${colors.blue}✓${colors.reset} Created directory: ${dir}`);
  }
}

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size / 1024; // KB
}

async function optimizeImage(inputPath, outputPath, targetSizeKB) {
  let quality = CONFIG.webpQuality;
  let attempt = 0;
  const maxAttempts = 10;

  while (attempt < maxAttempts) {
    attempt++;

    // Convert to WebP with current quality
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);

    const outputSize = await getFileSize(outputPath);

    if (outputSize <= targetSizeKB) {
      return { success: true, quality, finalSize: outputSize, attempts: attempt };
    }

    if (quality <= CONFIG.minQuality) {
      // Even at minimum quality, still too large - use resize
      const metadata = await sharp(inputPath).metadata();
      const scaleFactor = Math.sqrt(targetSizeKB / outputSize);
      const newWidth = Math.floor(metadata.width * scaleFactor * 0.9); // 90% to be safe

      await sharp(inputPath)
        .resize(newWidth)
        .webp({ quality: CONFIG.minQuality })
        .toFile(outputPath);

      const finalSize = await getFileSize(outputPath);
      return {
        success: true,
        quality: CONFIG.minQuality,
        finalSize,
        attempts: attempt,
        resized: true,
        newWidth
      };
    }

    // Reduce quality for next attempt
    quality -= 5;
  }

  return { success: false };
}

async function processImage(fileName, inputDir, outputDir) {
  const inputPath = path.join(inputDir, fileName);
  const outputFileName = fileName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFileName);

  const originalSize = await getFileSize(inputPath);

  console.log(`\n${colors.blue}Processing:${colors.reset} ${fileName}`);
  console.log(`  Original: ${originalSize.toFixed(2)} KB`);

  try {
    const result = await optimizeImage(inputPath, outputPath, CONFIG.maxFileSizeKB);

    if (result.success) {
      const savings = ((1 - result.finalSize / originalSize) * 100).toFixed(1);
      console.log(`${colors.green}  ✓ Success!${colors.reset}`);
      console.log(`  Optimized: ${result.finalSize.toFixed(2)} KB`);
      console.log(`  Quality: ${result.quality}%`);
      console.log(`  Savings: ${savings}%`);
      if (result.resized) {
        console.log(`  ${colors.yellow}Resized to width: ${result.newWidth}px${colors.reset}`);
      }
      console.log(`  Attempts: ${result.attempts}`);

      return {
        fileName,
        originalSize,
        optimizedSize: result.finalSize,
        savings: parseFloat(savings),
        quality: result.quality,
        resized: result.resized || false
      };
    } else {
      console.log(`${colors.red}  ✗ Failed to optimize${colors.reset}`);
      return null;
    }
  } catch (error) {
    console.log(`${colors.red}  ✗ Error: ${error.message}${colors.reset}`);
    return null;
  }
}

async function scanDirectory(dir) {
  const files = await fs.readdir(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return CONFIG.formats.includes(ext);
  });
}

async function main() {
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Image Optimization Script${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);

  // Ensure output directory exists
  await ensureDirectory(CONFIG.outputDir);

  // Find all images
  const images = await scanDirectory(CONFIG.sourceDir);

  if (images.length === 0) {
    console.log(`${colors.yellow}No images found in ${CONFIG.sourceDir}${colors.reset}`);
    return;
  }

  console.log(`Found ${colors.green}${images.length}${colors.reset} images to optimize\n`);

  // Process all images
  const results = [];
  for (const image of images) {
    const result = await processImage(image, CONFIG.sourceDir, CONFIG.outputDir);
    if (result) results.push(result);
  }

  // Summary
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Summary${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  const resizedCount = results.filter(r => r.resized).length;

  console.log(`  Processed: ${colors.green}${results.length}${colors.reset} images`);
  console.log(`  Total original size: ${totalOriginal.toFixed(2)} KB`);
  console.log(`  Total optimized size: ${totalOptimized.toFixed(2)} KB`);
  console.log(`  Total savings: ${colors.green}${totalSavings}%${colors.reset} (${(totalOriginal - totalOptimized).toFixed(2)} KB)`);
  if (resizedCount > 0) {
    console.log(`  ${colors.yellow}Images resized: ${resizedCount}${colors.reset}`);
  }
  console.log(`\n  Output directory: ${colors.blue}${CONFIG.outputDir}${colors.reset}\n`);
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error(`${colors.red}Fatal error:${colors.reset}`, error);
    process.exit(1);
  });
}

module.exports = { optimizeImage, processImage };
