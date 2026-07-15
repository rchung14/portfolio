import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTAPanel from '../components/CTAPanel.jsx';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';
import './Home.css';

export default function Home() {
  return (
    <>
      <Seo route="/" />

      {/* Hero */}
      <section className="hero">
        <Reveal className="hero__inner container">
          <p className="eyebrow eyebrow--muted hero__eyebrow">
            <span className="eyebrow__dot" />
            Freelance Web Developer
          </p>
          <h1 className="hero__title">
            Websites that win <em className="accent-em">trust</em> before the first{' '}
            <em className="accent-em">call</em>.
          </h1>
          <p className="lead hero__lead">
            I design and build fast, credible sites for law firms, financial
            consultants, and recruiting agencies, the kind of firms that sell trust
            for a living.
          </p>
          <div className="hero__ctas">
            <Link to="/work" className="btn btn--filled">
              See work →
            </Link>
            <Link to="/about#contact" className="btn btn--outline">
              Contact
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Work preview */}
      <section className="home-work container">
        <Reveal className="section-head">
          <h2 className="h2">Sites I’ve built.</h2>
          <Link to="/work" className="section-head__link">
            View all work →
          </Link>
        </Reveal>
        <div className="home-work__grid">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard
                url={p.url}
                name={p.name}
                industry={p.industry}
                description={p.tagline}
                status={p.status}
                image={p.image}
                imageWidth={p.imageWidth}
                imageHeight={p.imageHeight}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* What I do — editorial index */}
      <section className="home-index container">
        <Reveal className="section-head">
          <h2 className="h2">What I do.</h2>
          <Link to="/services" className="section-head__link">
            All services →
          </Link>
        </Reveal>
        <div className="home-index__list">
          {services.map((s) => (
            <Reveal key={s.id}>
              <Link to="/services" className="index-row">
                <span className="index-row__kicker">{s.kicker}</span>
                <span className="index-row__main">
                  <span className="index-row__title">{s.title}</span>
                  <span className="index-row__desc">{s.short}</span>
                </span>
                <span className="index-row__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAPanel heading="Have a project?" emphasis="Let’s talk." />
    </>
  );
}
