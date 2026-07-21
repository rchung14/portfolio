import { SITE_URL, SITE_NAME, EMAIL, LINKEDIN_URL } from '../config.js';

// JSON-LD blocks per route. The prerender script serializes these into
// <script type="application/ld+json"> tags baked into each static HTML file.

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ryan Chung',
  description: 'Freelance web developer specializing in professional-services firms',
  url: SITE_URL,
  email: EMAIL,
  areaServed: 'US',
  sameAs: [LINKEDIN_URL],
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ryan Chung',
  jobTitle: 'Freelance Web Developer',
  email: EMAIL,
  url: SITE_URL,
  sameAs: [LINKEDIN_URL],
};

const service = (name, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  description,
  provider: { '@type': 'ProfessionalService', name: 'Ryan Chung', url: SITE_URL },
  areaServed: 'US',
});

export const structuredData = {
  '/': [website, professionalService],
  '/work': [professionalService],
  '/services': [
    professionalService,
    service(
      'Built to be found',
      'Semantic, fast-loading sites structured for search from day one.',
    ),
    service(
      'Designed to earn trust',
      'Custom-designed, accessible sites for firms that need to read as credible.',
    ),
    service(
      'Handled end to end',
      "Built, hosted, and maintained on infrastructure managed on the client's behalf.",
    ),
    service(
      'Ongoing care',
      'Hosting, updates, and monitoring after launch, from $100/mo.',
    ),
  ],
  '/about': [professionalService, person],
};
