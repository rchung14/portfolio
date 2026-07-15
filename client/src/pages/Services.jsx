import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import CTAPanel from '../components/CTAPanel.jsx';
import { services } from '../data/services.js';
import './Services.css';

export default function Services() {
  return (
    <>
      <Seo route="/services" />

      <header className="services-head container">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="services-head__title">
            A small menu, done <em className="accent-em">properly</em>.
          </h1>
          <p className="lead services-head__lead">
            I keep the offering narrow on purpose: three things, done to a standard,
            instead of the long menu an agency would try to upsell you.
          </p>
        </Reveal>
      </header>

      <div className="container services-list">
        {services.map((s) => (
          <Reveal as="section" key={s.id} className="service-row">
            <div className="service-row__left">
              <p className="service-row__kicker">{s.kicker}</p>
              <h2 className="service-row__title">{s.title}</h2>
            </div>
            <div className="service-row__right">
              <p className="service-row__para">{s.paragraph}</p>
              <ul className="service-row__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span className="service-row__marker" aria-hidden="true">
                      •
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <CTAPanel heading="Sound like a" emphasis="fit?" />
    </>
  );
}
