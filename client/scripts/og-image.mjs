// Rasterizes public/og-card.svg to public/og-card.png at exactly 1200x630.
// Social scrapers (LinkedIn, Facebook, X, iMessage, Slack) do not render SVG
// og:images, so the deployed card must be a PNG. Run after editing the SVG:
//   node scripts/og-image.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const here = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(here, '..', 'public', 'og-card.svg');
const pngPath = path.join(here, '..', 'public', 'og-card.png');

const svg = fs.readFileSync(svgPath, 'utf8');
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  background: '#0a0a0a',
});
fs.writeFileSync(pngPath, resvg.render().asPng());

const { size } = fs.statSync(pngPath);
console.log(`og-card.png written: ${Math.round(size / 1024)}KB (1200x630)`);
