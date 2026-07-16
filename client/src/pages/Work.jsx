import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import BrowserMockup from '../components/BrowserMockup.jsx';
import CTAPanel from '../components/CTAPanel.jsx';
import { completedProjects, inProgressProjects } from '../data/projects.js';
import './Work.css';

function CaseArticle({ project, index }) {
  const p = project;
  return (
    <Reveal as="article" className={`case${index % 2 === 1 ? ' case--reverse' : ''}`}>
      <div className="case__media">
        {p.status === 'in-progress' && <span className="case__badge">In progress</span>}
        <BrowserMockup
          url={p.url}
          className="case__mockup"
          image={p.image}
          imageAlt={`${p.name} website homepage`}
          imageWidth={p.imageWidth}
          imageHeight={p.imageHeight}
        />
      </div>
      <div className="case__body">
        <p className="case__kicker">{p.industryLong || p.industry}</p>
        <h3 className="case__name">{p.name}</h3>
        <p className="case__desc">{p.description}</p>
        <dl className="case__meta">
          <div className="case__meta-cell">
            <dt>Role</dt>
            <dd>{p.role}</dd>
          </div>
          <div className="case__meta-cell">
            <dt>Stack</dt>
            <dd>{p.stack}</dd>
          </div>
          <div className="case__meta-cell">
            <dt>Year</dt>
            <dd>{p.year}</dd>
          </div>
        </dl>
        {p.liveUrl && (
          <a
            className="case__visit"
            href={p.liveUrl}
            target="_blank"
            rel={
              p.temporaryLink
                ? 'nofollow noopener noreferrer'
                : 'noopener noreferrer'
            }
          >
            {p.status === 'in-progress' ? 'View preview' : 'Visit site'} →
          </a>
        )}
      </div>
    </Reveal>
  );
}

function WorkSection({ id, label, items }) {
  if (items.length === 0) return null;
  return (
    <section className="work-section" aria-labelledby={id}>
      <Reveal className="work-section__label">
        <h2 id={id} className="work-section__title">
          {label}
        </h2>
        <span className="work-section__count">
          {String(items.length).padStart(2, '0')}
        </span>
      </Reveal>
      {items.map((p, i) => (
        <CaseArticle key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}

export default function Work() {
  return (
    <>
      <Seo route="/work" />

      <header className="work-head container">
        <Reveal>
          <p className="eyebrow">Selected Work</p>
          <h1 className="work-head__title">
            Sites built to be <em className="accent-em">believed</em>.
          </h1>
          <p className="lead work-head__lead">
            Firms that needed a website as serious as they are. Here’s how each one
            came together, and what’s on the bench.
          </p>
        </Reveal>
      </header>

      <div className="container">
        <WorkSection id="work-completed" label="Completed" items={completedProjects} />
        <WorkSection id="work-progress" label="In progress" items={inProgressProjects} />
      </div>

      <CTAPanel heading="Want to be" emphasis="next?" />
    </>
  );
}
