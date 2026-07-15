import { SITE_URL, EMAIL } from '../config.js';

// JSON-LD blocks per route. The prerender script serializes these into
// <script type="application/ld+json"> tags baked into each static HTML file.

const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ryan Chung',
  description: 'Freelance web developer specializing in professional-services firms',
  url: SITE_URL,
  email: EMAIL,
  areaServed: 'US',
  sameAs: [],
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ryan Chung',
  jobTitle: 'Freelance Web Developer',
  email: EMAIL,
  url: SITE_URL,
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
  '/': [professionalService],
  '/work': [professionalService],
  '/services': [
    professionalService,
    service(
      'React & Node web apps',
      'Custom-built React front ends backed by clean, documented Node services.',
    ),
    service(
      'SEO-ready builds',
      'Structure, speed, and semantics baked in from the first commit.',
    ),
    service(
      'Professional-services focus',
      'Websites for law, finance, and recruiting firms that sell trust.',
    ),
  ],
  '/about': [professionalService, person],
};
