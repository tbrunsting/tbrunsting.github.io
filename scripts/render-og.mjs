/**
 * One-off helper: converts hand-made SVG share cards in design/og/ into the
 * 1200×630 PNGs that social platforms require, written to public/og/.
 *
 *   npm run og
 *
 * This is not run during the site build — the PNGs are committed as static
 * files. You can also skip this script entirely and export PNGs from any
 * design tool (Figma, Canva, PowerPoint) straight into public/og/.
 */
import { readdir, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const srcDir = join(process.cwd(), 'design', 'og');
const outDir = join(process.cwd(), 'public', 'og');
await mkdir(outDir, { recursive: true });

const files = (await readdir(srcDir)).filter((f) => f.endsWith('.svg'));
for (const file of files) {
  const out = join(outDir, `${basename(file, '.svg')}.png`);
  await sharp(join(srcDir, file), { density: 144 })
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✔ ${file} → public/og/${basename(out)}`);
}
