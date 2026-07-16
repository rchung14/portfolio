// Shared by Home (preview cards) and Work (full case-study articles).
// status: 'completed' | 'in-progress' drives the Work page sections and card badge.
export const projects = [
  {
    id: 'kck',
    name: 'Kim, Choi & Kim',
    url: 'kckwebsite.vercel.app',
    liveUrl: 'https://kckwebsite.vercel.app',
    image: '/images/kck.webp',
    imageWidth: 1400,
    imageHeight: 876,
    industry: 'Law firm',
    industryLong: 'Real estate law',
    status: 'in-progress',
    // Temporary: KCK is unlaunched client work on a public *.vercel.app URL.
    // Flag it nofollow so we don't pass link equity to an unfinished preview.
    // Remove once the site launches on its own domain. Note: the KCK repo also
    // needs X-Robots-Tag: noindex until launch (see PR summary — other repo).
    temporaryLink: true,
    tagline: "A real-estate law practice's new site, in active development.",
    description:
      'Kim, Choi & Kim handle residential and commercial real estate closings across New Jersey and Washington DC, with counsel in both Korean and English. The new site, currently in progress, is organized around their practice areas so a first-time buyer can quickly reach the right attorney.',
    role: 'Design & development',
    stack: 'React',
    year: '2026',
  },
  {
    id: 'crf',
    name: 'CRF Advisors',
    url: 'crfadvisors.com',
    liveUrl: 'https://crfadvisors.com',
    image: '/images/crf.webp',
    imageWidth: 1400,
    imageHeight: 876,
    industry: 'Financial',
    industryLong: 'Financial services',
    status: 'completed',
    tagline: "A credit-risk advisory firm's site, kept precise and low-key.",
    description:
      'CRF Advisors reviews loan portfolios and credit risk for banks and credit unions. Precision is basically their product, so the site had to read as measured and credible while still explaining a technical service in plain terms. I organized it around their main practice areas and made it easy for an institution to get in touch.',
    role: 'Design & development',
    stack: 'React, Node',
    year: '2026',
  },
  {
    id: 'wheaton',
    name: 'The Wheaton Group',
    url: 'wheaton-group.com',
    liveUrl: 'https://wheaton-group.com',
    image: '/images/wheaton.webp',
    imageWidth: 1400,
    imageHeight: 876,
    industry: 'Recruiting',
    industryLong: 'Recruiting',
    status: 'completed',
    tagline: "A recruiting firm's site built around their 90-day placement guarantee.",
    description:
      'The Wheaton Group places hard-to-fill roles for federal contractors and professional-services firms, backed by a 90-day guarantee. Most recruiting sites read the same way, so we leaned on the guarantee as the thing that sets them apart and built the pages around it.',
    role: 'Design & development',
    stack: 'React, Node',
    year: '2025',
  },
];

export const completedProjects = projects.filter((p) => p.status === 'completed');
export const inProgressProjects = projects.filter((p) => p.status === 'in-progress');
