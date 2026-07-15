import { Resend } from 'resend';

let client;
let devMode = false;

// Builds the Resend client once. With RESEND_API_KEY set it sends real mail;
// without it, submissions are logged (not sent) so local development works
// with no API key.
function getClient() {
  if (client || devMode) return client;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    devMode = true;
    console.warn(
      '[mailer] RESEND_API_KEY is not set. Emails are logged, not sent. ' +
        'Set RESEND_API_KEY in server/.env to deliver real mail.',
    );
    return null;
  }

  client = new Resend(key);
  return client;
}

const escapeHtml = (str) =>
  String(str).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );

export async function sendContactEmail({ name, email, message }) {
  const resend = getClient();
  const to = process.env.CONTACT_TO || 'ryanchung14@gmail.com';
  const from = process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>';

  const payload = {
    from,
    to,
    replyTo: `${name} <${email}>`,
    subject: `New project inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html:
      `<p><strong>Name:</strong> ${escapeHtml(name)}<br>` +
      `<strong>Email:</strong> ${escapeHtml(email)}</p>` +
      `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  };

  if (!resend) {
    console.log('[mailer] (dev) would send:', JSON.stringify(payload, null, 2));
    return { id: 'dev-noop' };
  }

  const { data, error } = await resend.emails.send(payload);
  if (error) {
    throw new Error(error.message || 'Resend send failed');
  }
  return data;
}
