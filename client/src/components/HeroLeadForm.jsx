import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { submitContact } from '../utils/api';
import { trackFormSubmission } from '../utils/analytics';

export default function HeroLeadForm() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact({ ...form, source: 'hero-form', message: 'Quick quote request from homepage hero' });
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
      <button type="submit" className="vc-btn vc-btn--accent vc-hero-form__btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : <>Get Free Quote <HiArrowRight /></>}
      </button>
      {status === 'error' && <p className="vc-hero-form__error">Something went wrong. Please call us.</p>}
    </form>
  );
}
