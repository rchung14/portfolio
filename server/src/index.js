import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import { contactRouter } from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Behind one reverse proxy (Vercel/Render/etc.) so express-rate-limit reads the
// real client IP from X-Forwarded-For.
app.set('trust proxy', 1);

// CORS: restrict to configured origins in production; allow all if unset (dev).
const allowedOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
app.use(cors(allowedOrigins.length ? { origin: allowedOrigins } : undefined));

app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Throttle abuse: 5 submissions per IP per 15 minutes.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please try again later.' },
});

app.use('/api/contact', contactLimiter, contactRouter);

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});
