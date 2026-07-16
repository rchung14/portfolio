// Single source of truth for site-wide constants. Swap SITE_URL and EMAIL here
// and every canonical, JSON-LD block, sitemap entry, and contact link follows.
export const SITE_URL = 'https://ryanchung.dev';

export const SITE_NAME = 'Ryan Chung';

export const EMAIL = 'ryanchung14@gmail.com';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ryanchungcredit/';

// 1200x630 PNG social card — SVG is not rendered by social scrapers.
// Regenerate from og-card.svg with: node scripts/og-image.mjs
export const OG_IMAGE = `${SITE_URL}/og-card.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

// Indexable routes: prerendered AND listed in sitemap.xml.
export const ROUTES = ['/', '/work', '/services', '/pricing', '/about'];

// Legal pages: prerendered and indexable, but intentionally kept OUT of the
// sitemap (utility pages, not part of the site's search surface).
export const LEGAL_ROUTES = ['/privacy', '/terms', '/accessibility'];

// Base origin for the contact API. Empty in dev (Vite proxies /api to the
// local server); set VITE_API_BASE to the deployed server URL in production.
// Optional chaining keeps this safe when config.js is imported by the Node
// prerender script, where import.meta.env does not exist.
export const API_BASE = import.meta.env?.VITE_API_BASE || '';

