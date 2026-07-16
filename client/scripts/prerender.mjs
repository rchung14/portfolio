import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import {
  ROUTES,
  LEGAL_ROUTES,
  SITE_URL,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from '../src/config.js';
import { routesMeta } from '../src/seo/routesMeta.js';
import { structuredData } from '../src/seo/structuredData.js';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const templatePath = path.join(distDir, 'index.html');

// The client build wrote dist/index.html with the two placeholder comments.
const template = fs.readFileSync(templatePath, 'utf8');

// The SSR build wrote the render() entry here.
const { render } = await import(
  pathToFileURL(path.join(root, 'server-build', 'entry-server.js')).href
);

const escapeAttr = (str) =>
  String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const escapeText = (str) =>
  String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function buildHead({ title, description, canonical, jsonLd = [], noindex = false }) {
  const tags = [
    `<title>${escapeText(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : '',
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
  ];

  for (const block of jsonLd) {
    // Escape closing script tags to keep the JSON payload inert in HTML.
    const json = JSON.stringify(block).replaceAll('<', '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return tags.filter(Boolean).join('\n    ');
}

function routeToFile(route) {
  if (route === '/') return 'index.html';
  return `${route.replace(/^\//, '')}.html`;
}

function writePage(route, head, appHtml) {
  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml);
  const outPath = path.join(distDir, routeToFile(route));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');
  return outPath;
}

// --- Prerender each known route -------------------------------------------
// Legal routes are prerendered and indexable, but excluded from the sitemap.
const written = [];
for (const route of [...ROUTES, ...LEGAL_ROUTES]) {
  const meta = routesMeta[route];
  if (!meta) {
    throw new Error(`No routesMeta entry for ${route}`);
  }
  const { html } = render(route);
  const head = buildHead({
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    jsonLd: structuredData[route] || [],
  });
  written.push(writePage(route, head, html));
}

// --- SPA fallback for unknown URLs ----------------------------------------
// Empty app shell (client mounts fresh) with a neutral, noindexed head.
const fallbackHead = buildHead({
  title: routesMeta['/'].title,
  description: routesMeta['/'].description,
  canonical: `${SITE_URL}/`,
  noindex: true,
});
const fallbackHtml = template
  .replace('<!--app-head-->', fallbackHead)
  .replace('<!--app-html-->', '');
fs.writeFileSync(path.join(distDir, 'spa-fallback.html'), fallbackHtml, 'utf8');
written.push(path.join(distDir, 'spa-fallback.html'));

// --- sitemap.xml -----------------------------------------------------------
const lastmod = new Date().toISOString().slice(0, 10);
const priority = { '/': '1.0', '/work': '0.8', '/services': '0.8', '/about': '0.7' };
const urls = ROUTES.map((route) => {
  const loc = routesMeta[route].canonical;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    `    <priority>${priority[route] || '0.7'}</priority>`,
    '  </url>',
  ].join('\n');
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
written.push(path.join(distDir, 'sitemap.xml'));

console.log('Prerendered:');
for (const file of written) {
  console.log('  ' + path.relative(root, file));
}
