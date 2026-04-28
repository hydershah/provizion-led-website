import { useState, useRef, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { submitContact } from '../utils/api';
import { trackFormSubmission } from '../utils/analytics';
import { HONEYPOT_FIELD, honeypotStyle, buildAntiSpamPayload } from '../utils/antiSpam';

export default function HeroLeadForm() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [honeypot, setHoneypot] = useState('');
  const formStartedAt = useRef(Date.now());

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const antiSpam = buildAntiSpamPayload({
      formStartedAt: formStartedAt.current,
      honeypotValue: honeypot,
    });

    try {
      await submitContact({
        ...form,
        source: 'hero-form',
        message: 'Quick quote request from homepage hero',
        ...antiSpam,
      });
      trackFormSubmission('hero-form', true);
      setStatus('success');
    } catch {
      trackFormSubmission('hero-form', false);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="vc-hero-form vc-hero-form--success">
        <p>Thanks! We'll call you shortly.</p>
      </div>
    );
  }

  return (
    <form className="vc-hero-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Your Name"
        value={form.fullName}
        onChange={handleChange}
        required
        className="vc-hero-form__input"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="vc-hero-form__input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="vc-hero-form__input"
      />

      {/* Honeypot — bots fill this, humans never see it */}
      <div style={honeypotStyle} aria-hidden="true">
        <label htmlFor="hero-website">Website (leave blank)</label>
        <input
          id="hero-website"
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button type="submit" className="vc-btn vc-btn--accent vc-hero-form__btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : <>Get Free Quote <HiArrowRight /></>}
      </button>
      {status === 'error' && <p className="vc-hero-form__error">Something went wrong. Please call us.</p>}
    </form>
  );
}
