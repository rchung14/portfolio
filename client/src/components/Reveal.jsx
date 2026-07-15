import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';

// Thin wrapper that applies the scroll-reveal behavior to any element.
// Usage: <Reveal as="section" className="...">…</Reveal>
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <Tag ref={ref} data-reveal className={className} {...rest}>
      {children}
    </Tag>
  );
}
