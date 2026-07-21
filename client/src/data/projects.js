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
    tagline: 'A law firm with no web presence. We built their first website from scratch.',
    description:
      "Kim, Choi & Kim handle residential and commercial real estate closings across New Jersey and Washington DC, with counsel in both Korean and English. Before this, they had no website at all and relied entirely on word of mouth. We're building their first site from scratch: a clean, professional foundation organized around their practice areas, so a first-time buyer can quickly find the right attorney.",
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
    tagline: 'The old site was slow, dated, and invisible on mobile. We rebuilt it to be fast and easy to find.',
    description:
      "CRF Advisors reviews loan portfolios and credit risk for banks and credit unions. Their old site was slow, looked dated, and was barely usable on mobile. It also didn't turn up in the searches their own clients were running. We rebuilt it from the ground up: faster, mobile-first, and structured so their core services show up in search. Precision is basically their product, so the site still had to read as measured and credible, not just quick to load.",
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
    tagline: 'A ground-up build with a live backend, so job listings stay current on their own.',
    description:
      'The Wheaton Group places hard-to-fill roles for federal contractors and professional-services firms, backed by a 90-day guarantee. We built the site from the ground up with a live backend: job listings pull straight from a database, so postings stay current without anyone editing the site by hand. Most recruiting sites read the same way, so we leaned on the guarantee as the thing that sets them apart.',
    role: 'Design & development',
    stack: 'React, Node',
    year: '2025',
  },
];

export const completedProjects = projects.filter((p) => p.status === 'completed');
export const inProgressProjects = projects.filter((p) => p.status === 'in-progress');
