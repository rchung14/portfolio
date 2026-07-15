import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On client navigation: scroll to a #hash target when present (e.g.
// /about#contact), otherwise reset to the top of the page.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
