import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import CTAPanel from '../components/CTAPanel.jsx';
import { pricingIntro, pricingTiers, processSteps } from '../data/pricing.js';
import './Pricing.css';

export default function Pricing() {
  return (
    <>
      <Seo route="/pricing" />

      <header className="pricing-head container">
        <Reveal>
          <p className="eyebrow">{pricingIntro.eyebrow}</p>
          <h1 className="pricing-head__title">
            {pricingIntro.titlePlain}{' '}
            <em className="accent-em">{pricingIntro.titleEmphasis}</em>
          </h1>
          <p className="lead pricing-head__lead">{pricingIntro.lead}</p>
        </Reveal>
      </header>

      <div className="container pricing-list">
        {pricingTiers.map((tier) => (
          <Reveal as="section" key={tier.id} className="pricing-row">
            <div className="pricing-row__left">
              <p className="pricing-row__kicker">{tier.kicker}</p>
              <h2 className="pricing-row__title">{tier.title}</h2>
              <p className="pricing-row__from">{tier.from}</p>
            </div>
            <div className="pricing-row__right">
              <p className="pricing-row__para">{tier.paragraph}</p>
              <ul className="pricing-row__bullets">
                {tier.bullets.map((b) => (
                  <li key={b}>
                    <span className="pricing-row__marker" aria-hidden="true">
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

      <Reveal as="section" className="container pricing-process">
        <p className="eyebrow eyebrow--muted">
          <span className="eyebrow__dot" aria-hidden="true" />
          How a project runs
        </p>
        <ul className="process-steps">
          {processSteps.map((step) => (
            <li key={step.number} className="process-step">
              <span className="process-step__number">{step.number}</span>
              <span className="process-step__label">{step.label}</span>
              <span className="process-step__desc">{step.description}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <CTAPanel heading="Let's talk about" emphasis="your project." />
    </>
  );
}
