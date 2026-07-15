import { useEffect } from 'react';

// Observes a ref and adds `is-visible` when it scrolls into view. The hidden
// initial state lives in CSS behind `.reveal-enabled` (set pre-paint in
// index.html), so this only ever reveals; it never hides SSR content. When
// motion is disabled or IntersectionObserver is missing, the element is shown
// immediately with no transition.
export function useReveal(ref, options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const enabled =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('reveal-enabled');

    if (!enabled) {
      el.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          target.classList.add('is-visible');
          obs.unobserve(target);
          const cleanup = () => {
            target.style.willChange = '';
            target.removeEventListener('transitionend', cleanup);
          };
          target.addEventListener('transitionend', cleanup);
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);
}
