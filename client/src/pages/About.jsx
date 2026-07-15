import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { EMAIL, LINKEDIN_URL } from '../config.js';
import './About.css';

const WORK_CELLS = [
  {
    kicker: 'Direct',
    title: 'You talk to the person building it',
    body: 'Every conversation is with me. Decisions happen fast because there’s no one to relay them through.',
  },
  {
    kicker: 'Deliberate',
    title: 'A few projects at a time',
    body: 'I take on a small number of clients so each one gets real attention, not a slot in a production line.',
  },
  {
    kicker: 'Durable',
    title: 'Built to last past launch',
    body: 'Clean, documented code you own outright. No proprietary lock-in, no surprise dependency on me.',
  },
];

export default function About() {
  return (
    <>
      <Seo route="/about" />

      {/* Intro */}
      <section className="about-intro container">
        <Reveal className="about-intro__text">
          <p className="eyebrow">About</p>
          <h1 className="about-intro__title">
            I build real things for <em className="accent-em">real</em> businesses.
          </h1>
          <p className="about-intro__para">
            I’m Ryan, a freelance web developer who’s spent the last several years
            building websites for firms that live or die on credibility. Law
            practices, financial consultants, recruiting agencies: businesses where a
            website isn’t decoration, it’s the first handshake.
          </p>
          <p className="about-intro__para">
            I work solo and stay hands-on from first call to launch. No account
            managers, no offshore handoffs, no template dressed up as bespoke. Just
            one developer who cares that the thing works and reads as serious as you
            are.
          </p>
        </Reveal>

        <Reveal className="about-intro__portrait">
          <div className="about-portrait">
            <img
              src="/images/portrait.webp"
              alt="Ryan Chung, freelance web developer"
              width="881"
              height="760"
              fetchPriority="high"
            />
          </div>
        </Reveal>
      </section>

      {/* How I work */}
      <section className="about-work container">
        <Reveal>
          <h2 className="about-work__title">How I work.</h2>
        </Reveal>
        <Reveal className="about-work__grid">
          {WORK_CELLS.map((cell) => (
            <div className="about-cell" key={cell.kicker}>
              <p className="about-cell__kicker">{cell.kicker}</p>
              <h3 className="about-cell__title">{cell.title}</h3>
              <p className="about-cell__body">{cell.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Contact */}
      <section className="about-contact container" id="contact">
        <Reveal className="about-contact__panel">
          <div className="about-contact__left">
            <h2 className="about-contact__title">
              Have a project? <em className="accent-em">Let’s talk.</em>
            </h2>
            <p className="about-contact__para">
              Tell me about the firm, the timeline, and what the current site isn’t
              doing. I’ll tell you honestly whether I’m the right fit.
            </p>

            <div className="about-contact__tiles">
              <a className="contact-tile" href={`mailto:${EMAIL}`}>
                <span className="contact-tile__text">
                  <span className="contact-tile__label">Email</span>
                  <span className="contact-tile__value">{EMAIL}</span>
                </span>
                <span className="contact-tile__arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className="contact-tile"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-tile__text">
                  <span className="contact-tile__label">Elsewhere</span>
                  <span className="contact-tile__value">LinkedIn</span>
                </span>
                <span className="contact-tile__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="about-contact__right">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
