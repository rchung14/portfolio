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
    body: 'I take on a small number of clients at once, so each project gets real attention and a schedule that actually holds.',
  },
  {
    kicker: 'Durable',
    title: 'Built to last past launch',
    body: 'Clean, documented code that you own outright. You can hand it to another developer whenever you like without untangling anything proprietary.',
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
            I’m Ryan, a freelance web developer. For the last several years I’ve
            built sites for firms whose reputation is most of what they sell: law
            practices, financial consultants, recruiting agencies. For a business
            like that, the website is usually where a prospective client forms a
            first impression.
          </p>
          <p className="about-intro__para">
            I work solo and stay hands-on from the first call to launch. You deal
            with me directly the whole way, and the site gets built for your firm
            rather than adapted from a template. I care that it works and that it
            reads as seriously as you take your own business.
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
              Tell me about the firm, the timeline, and where the current site is
              falling short. I’ll let you know whether I’m the right fit.
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
