import { Link } from 'react-router-dom';
import { EMAIL } from '../config.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__wordmark">
              Ryan Chung
            </Link>
            <p className="footer__bio">
              Freelance web developer building credible, fast sites for
              professional-services firms. Available for select projects.
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </nav>
        </div>

        <p className="footer__copyright">
          Built by Ryan Chung · B.S. Computer Science, Boston University.
        </p>
      </div>
    </footer>
  );
}
