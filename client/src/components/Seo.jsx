import { useEffect } from 'react';
import { routesMeta } from '../seo/routesMeta.js';
import { OG_IMAGE } from '../config.js';

// Head is baked into every prerendered route at build time (see
// scripts/prerender.mjs), which is what search crawlers and social scrapers
// read. This component keeps <head> correct during client-side navigation and
// in dev by syncing title/description/canonical/OG on route change.
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, key] = selector.match(/\[(?:name|property)="(.+)"\]/) || [];
    if (selector.includes('property=')) el.setAttribute('property', key);
    else el.setAttribute('name', key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function Seo({ route }) {
  const meta = routesMeta[route];

  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;

    setMeta('meta[name="description"]', 'content', meta.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonical);

    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', meta.canonical);
    setMeta('meta[property="og:image"]', 'content', OG_IMAGE);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
  }, [route, meta]);

  return null;
}
