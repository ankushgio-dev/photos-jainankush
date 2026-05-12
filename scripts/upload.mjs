#!/usr/bin/env node
/**
 * photos.jainankush.com — upload helper
 *
 * USAGE:
 *   node scripts/upload.mjs <source-dir> <category-slug> [--location "Name"] [--region "India"] [--year 2018] [--alt-template "Name, {year}"] [--featured]
 *
 * EXAMPLE:
 *   node scripts/upload.mjs ~/Desktop/new-photos rural-punjab
 *   node scripts/upload.mjs ~/Desktop/ladakh-trip travel --location "Ladakh"
 *
 * WHAT IT DOES:
 *   1. Reads every JPG/JPEG/PNG from <source-dir>
 *   2. Strips ALL EXIF/IPTC metadata
 *   3. Resizes to max 2400px on long edge (preserves aspect ratio)
 *   4. Re-encodes JPEG at quality 82 (mozjpeg) — looks great, small file size
 *   5. Writes to /public/photos/<category-slug>/<slug>.jpg
 *   6. Prints the JS entries you paste into src/data/photos.js
 *
 * REQUIREMENTS:
 *   npm install (installs sharp)
 *
 * NOTE: This uses /public/ for now. When you outgrow Git (>500 photos or >500MB)
 * we'll add an R2 upload path here — the manifest format stays identical.
 */

import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const VALID_CATEGORIES = [
  'rural-punjab',
  'golden-temple',
  'sunrise-sunsets',
  'street',
  'wildlife',
  'travel',
  'hero',
];

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/upload.mjs <source-dir> <category-slug> [--location "Name"] [--featured]');
  process.exit(1);
}

const [srcDir, category] = args;
const locationFlag = args.indexOf('--location');
const location = locationFlag !== -1 ? args[locationFlag + 1] : null;
const regionFlag = args.indexOf('--region');
const region = regionFlag !== -1 ? args[regionFlag + 1] : null;
const yearFlag = args.indexOf('--year');
const year = yearFlag !== -1 ? args[yearFlag + 1] : null;
const altTemplateFlag = args.indexOf('--alt-template');
const altTemplate = altTemplateFlag !== -1 ? args[altTemplateFlag + 1] : null;
const featured = args.includes('--featured');

if (!VALID_CATEGORIES.includes(category)) {
  console.error(`Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  process.exit(1);
}

if (category === 'travel' && !location) {
  console.warn('⚠ Warning: --location not provided for travel photo. Filter chips need this.');
}

const outDir = join(ROOT, 'public', 'photos', category);
await mkdir(outDir, { recursive: true });

const files = (await readdir(srcDir))
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

if (files.length === 0) {
  console.error(`No JPG/PNG files in ${srcDir}`);
  process.exit(1);
}

// Slug prefix per category for ordering
const prefixMap = {
  'rural-punjab': 'rp',
  'golden-temple': 'gt',
  'sunrise-sunsets': 'ss',
  street: 'st',
  wildlife: 'wl',
  travel: 'tr',
  hero: 'hero',
};
const prefix = prefixMap[category];
const locSlug = location ? `${location.toLowerCase().replace(/\s+/g, '-')}-` : '';

// Build scoped regex: when location is provided, only count files matching THIS location.
// This fixes the bug where Ladakh got 011-020 (counted whole travel/ folder)
// instead of 001-010 (its own location-scoped count).
const slugRegex = locSlug
  ? new RegExp(`^${prefix}-${locSlug}(\\d{3})\\.jpg$`)
  : new RegExp(`^${prefix}-(\\d{3})\\.jpg$`);

// Find next available index for this category+location scope
const existing = existsSync(outDir) ? await readdir(outDir) : [];
let nextIdx = 1;
existing.forEach((f) => {
  const m = f.match(slugRegex);
  if (m) {
    const n = parseInt(m[1], 10);
    if (n >= nextIdx) nextIdx = n + 1;
  }
});


const entries = [];
console.log(`\nProcessing ${files.length} file(s) → /public/photos/${category}/\n`);

for (const file of files) {
  const srcPath = join(srcDir, file);
  const idx = String(nextIdx++).padStart(3, '0');
  const slug = `${prefix}-${locSlug}${idx}`;
  const outName = `${slug}.jpg`;
  const outPath = join(outDir, outName);

  await sharp(srcPath)
    .rotate() // honor orientation, then strip EXIF
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .withMetadata({ exif: {}, icc: undefined }) // strip all metadata
    .toFile(outPath);



  

  const meta = await sharp(outPath).metadata();
  const altGuess = altTemplate
    ? altTemplate.replace('{year}', year || '')
    : basename(file, extname(file)).replace(/[-_]/g, ' ');

  const entry = {
    slug,
    src: `/photos/${category}/${outName}`,
    alt: altGuess,
    category,
    ...(location ? { location } : {}),
    ...(region ? { region } : {}),
    ...(featured ? { featured: true } : {}),
    width: meta.width,
    height: meta.height,
  };



  entries.push(entry);
  console.log(`  ✓ ${file} → ${outName} (${meta.width}×${meta.height})`);
}

console.log(`\n${entries.length} photo(s) processed.\n`);
console.log('Paste these entries into src/data/photos.js → const photos = [...]:\n');
console.log('─'.repeat(60));
entries.forEach((e) => {
  const parts = [
    `slug: '${e.slug}'`,
    `src: '${e.src}'`,
    `alt: '${e.alt}'`,
    `category: '${e.category}'`,
  ];
 if (e.location) parts.push(`location: '${e.location}'`);
  if (e.region) parts.push(`region: '${e.region}'`);
  if (e.featured) parts.push(`featured: true`);
  console.log(`  { ${parts.join(', ')} },`);
});
console.log('─'.repeat(60));
console.log('\nRemember to update the `alt` text to describe what is in the photograph.');
console.log('Then: npm run build && git push.\n');
