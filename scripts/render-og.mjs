/**
 * One-off helper: converts hand-made SVG share cards in design/og/ into the
 * 1200×630 PNGs that social platforms require, written to public/og/.
 *
 *   npm run og
 *
 * An SVG may embed a local image with href="asset:<path from project root>";
 * the file is inlined as a data URI before rendering (images are scaled by the
 * SVG, never cropped or recoloured here).
 *
 * This is not run during the site build — the PNGs are committed as static
 * files. You can also skip this script entirely and export PNGs from any
 * design tool (Figma, Canva, PowerPoint) straight into public/og/.
 */
import { readdir, readFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const srcDir = join(root, 'design', 'og');
const outDir = join(root, 'public', 'og');
await mkdir(outDir, { recursive: true });

const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

async function inlineAssets(svg) {
  const refs = [...svg.matchAll(/href="asset:([^"]+)"/g)];
  for (const [match, rel] of refs) {
    const data = await readFile(join(root, rel));
    const type = mime[extname(rel).toLowerCase()] ?? 'application/octet-stream';
    svg = svg.replace(match, `href="data:${type};base64,${data.toString('base64')}"`);
  }
  return svg;
}

const files = (await readdir(srcDir)).filter((f) => f.endsWith('.svg'));
for (const file of files) {
  const svg = await inlineAssets(await readFile(join(srcDir, file), 'utf8'));
  const out = join(outDir, `${basename(file, '.svg')}.png`);
  await sharp(Buffer.from(svg), { density: 144 })
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✔ ${file} → public/og/${basename(out)}`);
}
