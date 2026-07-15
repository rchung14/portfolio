// Shared by Home (preview cards) and Work (full case-study articles).
// status: 'completed' | 'in-progress' drives the Work page sections and card badge.
export const projects = [
  {
    id: 'crf',
    name: 'CRF Advisors',
    url: 'crfadvisors.com',
    liveUrl: 'https://crfadvisors.com',
    industry: 'Financial',
    industryLong: 'Financial services',
    status: 'completed',
    tagline: 'A credit-risk advisory firm’s site, precise and quietly authoritative.',
    description:
      'CRF Advisors reviews loan portfolios and credit risk for banks and credit unions, work where precision is the entire product. The site needed to signal exactly that: measured, credible, and clear about a technical service without burying a first-time visitor in jargon. I structured it around their core practice areas and gave prospective institutions a direct path to start a conversation.',
    role: 'Design & development',
    stack: 'React, Node',
    year: '2024',
  },
  {
    id: 'wheaton',
    name: 'The Wheaton Group',
    url: 'wheaton-group.com',
    liveUrl: 'https://wheaton-group.com',
    industry: 'Recruiting',
    industryLong: 'Recruiting',
    status: 'completed',
    tagline: 'A recruiting firm’s site built around the one thing they sell: certainty.',
    description:
      'The Wheaton Group places hard-to-fill roles for federal contractors and professional-services firms, backed by a 90-day guarantee. Recruiting sites tend to blur together, so the brief was to sound like none of them. We built the site around results and reliability, and let that single promise carry every page.',
    role: 'Design & development',
    stack: 'React, Node',
    year: '2025',
  },
  {
    id: 'kck',
    name: 'Kim, Choi & Kim',
    url: 'kckwebsite.vercel.app',
    liveUrl: 'https://kckwebsite.vercel.app',
    industry: 'Law firm',
    industryLong: 'Real estate law',
    status: 'in-progress',
    tagline: 'A real-estate law practice’s new site, in active development.',
    description:
      'Kim, Choi & Kim handle residential and commercial real estate closings across New Jersey and Washington DC, with counsel in both Korean and English. The build, currently in progress, rebuilds their site around practice areas and makes it easy for a first-time buyer to reach the right attorney without friction.',
    role: 'Design & development',
    stack: 'React',
    year: '2026',
  },
];

export const completedProjects = projects.filter((p) => p.status === 'completed');
export const inProgressProjects = projects.filter((p) => p.status === 'in-progress');
