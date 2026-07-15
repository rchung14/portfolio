import { useState } from 'react';
import { API_BASE } from '../config.js';
import './ContactForm.css';

const EMPTY = { name: '', email: '', message: '', company: '' };

// company is a honeypot field: hidden from users, ignored by the server unless
// filled (bots fill it), so a filled value silently fails as spam.
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!values.name.trim()) return 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      return 'Please add a valid email address.';
    if (values.message.trim().length < 10)
      return 'Tell me a little more about the project.';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const clientError = validate();
    if (clientError) {
      setStatus('error');
      setError(clientError);
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setValues(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(
        err.message === 'Failed to fetch'
          ? 'Could not reach the server. Please email me directly.'
          : err.message,
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--sent" role="status">
        <p className="contact-form__sent-title">Thanks, that’s through.</p>
        <p className="contact-form__sent-body">
          I’ll get back to you within a day or two. If it’s urgent, email me
          directly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          value={values.name}
          onChange={onChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={200}
          value={values.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">Project details</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={5000}
          value={values.message}
          onChange={onChange}
          required
        />
      </div>

      {/* Honeypot: visually hidden, off the tab order, ignored by humans. */}
      <div className="contact-form__hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={onChange}
        />
      </div>

      <div className="contact-form__foot">
        <button type="submit" className="btn btn--filled" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>
        <p className="contact-form__status" role="alert" aria-live="polite">
          {status === 'error' ? error : ''}
        </p>
      </div>
    </form>
  );
}
