import { Router } from 'express';
import { validateContact } from '../validate.js';
import { sendContactEmail } from '../mailer.js';

export const contactRouter = Router();

// POST /api/contact
contactRouter.post('/', async (req, res) => {
  const result = validateContact(req.body);

  // Honeypot tripped: respond 200 so bots learn nothing, but do not send.
  if (result.spam) {
    return res.status(200).json({ ok: true });
  }

  if (result.errors.length) {
    return res.status(400).json({
      error: 'Please check the form and try again.',
      fields: result.errors,
    });
  }

  try {
    await sendContactEmail(result.data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    return res.status(500).json({
      error: 'Could not send your message. Please email me directly.',
    });
  }
});
