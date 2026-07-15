import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import './CTAPanel.css';

// Shared closing call-to-action panel. `heading` and `emphasis` build the
// H2 ("<heading> <em>emphasis</em>"); the emphasis word is accent-colored and
// upright (never italic).
export default function CTAPanel({
  heading,
  emphasis,
  buttonLabel = 'Start a conversation →',
  to = '/about#contact',
}) {
  return (
    <Reveal as="section" className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">
          {heading} <em className="accent-em">{emphasis}</em>
        </h2>
        <Link to={to} className="btn btn--filled">
          {buttonLabel}
        </Link>
      </div>
    </Reveal>
  );
}
