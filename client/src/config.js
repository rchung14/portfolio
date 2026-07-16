// Single source of truth for site-wide constants. Swap SITE_URL and EMAIL here
// and every canonical, JSON-LD block, sitemap entry, and contact link follows.
export const SITE_URL = 'https://ryanchung.dev';

export const SITE_NAME = 'Ryan Chung';

export const EMAIL = 'ryanchung14@gmail.com';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ryanchungcredit/';

// Placeholder social card ships as SVG. Replace with a 1200x630 PNG named
// og-card.png (and update this constant) for best cross-platform scraping.
export const OG_IMAGE = `${SITE_URL}/og-card.svg`;

// Google Search Console verification token. Replace the placeholder with the
// real code from Search Console before deploying.
export const GSC_VERIFICATION = 'PASTE_GSC_CODE_HERE';

export const ROUTES = ['/', '/work', '/services', '/pricing', '/about'];

// Base origin for the contact API. Empty in dev (Vite proxies /api to the
// local server); set VITE_API_BASE to the deployed server URL in production.
// Optional chaining keeps this safe when config.js is imported by the Node
// prerender script, where import.meta.env does not exist.
export const API_BASE = import.meta.env?.VITE_API_BASE || '';

