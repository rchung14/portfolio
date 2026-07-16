import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { legalDocs } from '../data/legal.js';
import './Legal.css';

// Shared shell for the /privacy, /terms, and /accessibility pages.
// `doc` selects the content block; `route` drives the baked SEO head.
export default function Legal({ doc, route }) {
  const content = legalDocs[doc];

  return (
    <>
      <Seo route={route} />

      <article className="legal container">
        <Reveal>
          <header className="legal__head">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="legal__title">{content.title}</h1>
            <p className="legal__updated">Last updated: {content.updated}</p>
            <p className="lead legal__intro">{content.intro}</p>
          </header>
        </Reveal>

        {content.sections.map((section) => (
          <Reveal as="section" key={section.heading} className="legal__section">
            <h2 className="legal__heading">{section.heading}</h2>
            {section.paragraphs.map((para) => (
              <p key={para} className="legal__para">
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="legal__bullets">
                {section.bullets.map((b) => (
                  <li key={b}>
                    <span className="legal__marker" aria-hidden="true">
                      •
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </article>
    </>
  );
}
