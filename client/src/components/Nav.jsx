import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll while the mobile drawer is open.
  // Set on <html> not <body> — iOS Safari blocks touch events on fixed elements
  // when overflow:hidden is on body.
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav${condensed ? ' is-condensed' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__wordmark" onClick={closeMenu}>
          Ryan Chung
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav__link">
              {link.label}
            </NavLink>
          ))}
          <Link to="/about#contact" className="nav__cta">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav__toggle-icon${open ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="nav-drawer"
        className={`nav__drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav__drawer-link"
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/about#contact" className="nav__cta nav__drawer-cta" onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
