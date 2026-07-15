const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validates and normalizes a contact submission. Returns either:
//   { spam: true }                      -> honeypot tripped, treat as silent OK
//   { errors: [...], data }             -> errors is empty when valid
export function validateContact(body = {}) {
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  const company = String(body.company ?? '').trim(); // honeypot

  if (company) return { spam: true };

  const errors = [];
  if (!name || name.length > 100) errors.push('name');
  if (!EMAIL_RE.test(email) || email.length > 200) errors.push('email');
  if (message.length < 10 || message.length > 5000) errors.push('message');

  return { errors, data: { name, email, message } };
}
