// Content for the Pricing page. All copy lives here — nothing hardcoded in JSX.
export const pricingIntro = {
  eyebrow: 'Pricing',
  titlePlain: 'Scoped to your project,',
  titleEmphasis: 'not a package.',
  lead: 'Every project is quoted after a conversation — not because pricing is vague, but because a recruiting firm with four pages has different needs than a law practice with eight. Custom builds for professional-services firms, not template work.',
};

export const pricingTiers = [
  {
    id: 'builds',
    kicker: 'New site',
    title: 'Custom builds',
    from: 'from $3,500',
    paragraph:
      'Most projects land between $3,500 and $6,500, depending on page count, content needs, and integrations. The floor reflects the work that goes into every build — not a stripped-down starter.',
    bullets: [
      'Design and development, end to end',
      'SEO and structured data from day one, not patched in later',
      'Performance targets: Lighthouse ≥ 90 on launch',
      'Contact system wired and tested',
      'Launch on your domain, handled',
      '30 days of post-launch changes included',
    ],
  },
  {
    id: 'care',
    kicker: 'Ongoing',
    title: 'Care plan',
    from: 'from $100 / mo',
    paragraph:
      'Hosting management, content updates, small changes, and priority response. The idea is simple: once the site is live, you never think about it again.',
    bullets: [
      'Hosting and uptime monitoring',
      'Content updates and copy edits',
      'Small layout or feature changes',
      'Priority response when something comes up',
    ],
  },
];

export const processSteps = [
  {
    number: '01',
    label: 'Conversation',
    description: 'We talk through your goals, timeline, and what good looks like.',
  },
  {
    number: '02',
    label: 'Design',
    description: 'A high-fidelity mock — you see the site before a line of code is written.',
  },
  {
    number: '03',
    label: 'Build',
    description: 'React front end, clean Node back end, tested across devices.',
  },
  {
    number: '04',
    label: 'Launch',
    description: 'Deployed on your domain, indexed, and handed over with docs.',
  },
];
