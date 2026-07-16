// Content for the /privacy, /terms, and /accessibility pages. Plain-language
// drafts — see each doc's `updated` date. NOT legal advice; the site owner
// should review before relying on them. [STATE] in Terms is an owner TODO.
import { EMAIL } from '../config.js';

const UPDATED = 'July 16, 2026';

export const legalDocs = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updated: UPDATED,
    intro:
      'This policy explains what information this website collects, why, and how it is handled. It is written in plain language on purpose.',
    sections: [
      {
        heading: 'What this site collects',
        paragraphs: [
          'The only information this site collects is what you choose to type into the contact form: your name, your email address, and the details of your message. There are no accounts, no logins, and no tracking or advertising cookies.',
        ],
      },
      {
        heading: 'Why it is collected',
        paragraphs: [
          'Your name, email, and message are used for one purpose: to read your inquiry and reply to it. Nothing more.',
        ],
      },
      {
        heading: 'Where it goes',
        paragraphs: [
          `When you submit the contact form, its contents are sent to a small server that forwards the message to me by email at ${EMAIL}. Your message effectively lives in that email inbox.`,
        ],
      },
      {
        heading: 'Analytics and tracking',
        paragraphs: [
          'This site does not use analytics, tracking pixels, or third-party advertising scripts. Your visit is not profiled.',
        ],
      },
      {
        heading: 'Sharing',
        paragraphs: [
          'Your information is never sold, rented, or shared with third parties. It is used solely to respond to you.',
        ],
      },
      {
        heading: 'Hosting and logs',
        paragraphs: [
          'The site is hosted on Vercel, and the contact endpoint runs on a standard web host. Like most hosts, these may keep short-lived technical logs (such as IP addresses and request times) for security and reliability. These logs are not used to identify or profile visitors.',
        ],
      },
      {
        heading: 'Retention and removal',
        paragraphs: [
          `Messages are kept only as long as needed to correspond with you. You can ask me to delete your information at any time by emailing ${EMAIL}, and I will remove it.`,
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          `If this policy changes, the date at the top of this page will be updated. Questions are welcome at ${EMAIL}.`,
        ],
      },
    ],
  },

  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Service',
    updated: UPDATED,
    intro:
      'These terms govern your use of this website. By using the site, you agree to them.',
    sections: [
      {
        heading: 'Content ownership',
        paragraphs: [
          'Unless otherwise noted, all content on this site — text, design, code, and images — is owned by Ryan Chung and may not be copied or reused without permission. Client project names and screenshots remain the property of their respective owners and are shown as portfolio examples.',
        ],
      },
      {
        heading: 'Use of this site',
        paragraphs: [
          'This site is provided for general informational purposes: to describe services, show past work, and let you get in touch. It does not constitute a contract, offer, or professional advice on its own.',
        ],
      },
      {
        heading: 'No warranty',
        paragraphs: [
          'The site and its content are provided "as is," without warranties of any kind. While I aim to keep information accurate and current, I make no guarantee that it is complete, error-free, or continuously available.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, Ryan Chung is not liable for any loss or damage arising from your use of, or inability to use, this site or any content on it.',
        ],
      },
      {
        heading: 'External links',
        paragraphs: [
          'This site links to external websites, including live client projects. I am not responsible for the content, availability, or practices of sites I do not control.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms are governed by the laws of the State of [STATE], without regard to its conflict-of-law rules.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          `These terms may be updated from time to time; the date at the top of this page reflects the latest version. Questions can be directed to ${EMAIL}.`,
        ],
      },
    ],
  },

  accessibility: {
    eyebrow: 'Legal',
    title: 'Accessibility Statement',
    updated: UPDATED,
    intro:
      'I want this site to be usable by everyone, including people who rely on assistive technology. This statement describes the target, the measures in place, and how to reach me if something falls short.',
    sections: [
      {
        heading: 'Conformance target',
        paragraphs: [
          'This site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. That standard is the benchmark I build and test against.',
        ],
      },
      {
        heading: 'Measures in place',
        paragraphs: ['Steps taken to keep the site accessible include:'],
        bullets: [
          'Semantic HTML so structure is clear to screen readers',
          'A "skip to content" link for keyboard users',
          'Full keyboard navigation with visible focus outlines',
          'Descriptive alt text on meaningful images',
          'Color contrast checked against WCAG AA thresholds',
          'A responsive layout that supports zoom and small screens',
          'Respect for the "reduce motion" system setting',
        ],
      },
      {
        heading: 'Known limitations',
        paragraphs: [
          'Some linked external sites, including in-progress client previews, are outside my control and may not meet the same standard. I work to keep everything on this domain accessible.',
        ],
      },
      {
        heading: 'Feedback',
        paragraphs: [
          `If you run into an accessibility barrier on this site, I want to hear about it. Email me at ${EMAIL} with a description of the problem and the page it occurred on, and I will do my best to fix it.`,
        ],
      },
    ],
  },
};
