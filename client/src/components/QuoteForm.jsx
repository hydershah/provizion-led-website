import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { submitContact } from '../utils/api';
import './QuoteForm.css';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export default function QuoteForm({ source = 'contact-page', compact = false }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await submitContact({ ...form, source });
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      const msg =
        err.response?.data?.errors?.[0]?.message ||
        err.response?.data?.message ||
        'Something went wrong. Please call us at (984) 217-6527.';
      setErrorMsg(msg);
    }
  };

  return (
    <div className={`quote-form ${compact ? 'quote-form--compact' : ''}`}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            className="quote-form__success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <HiCheckCircle className="quote-form__success-icon" />
            <h3>Thank You!</h3>
            <p>We&apos;ll get back to you within 24 hours.</p>
            <button
              className="btn btn--outline btn--sm"
              onClick={() => setStatus('idle')}
              type="button"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="quote-form__form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="quote-form__field">
              <label htmlFor={`fullName-${source}`}>Full Name</label>
              <input
                id={`fullName-${source}`}
                name="fullName"
                type="text"
                placeholder="Your full name"
                value={form.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className={`quote-form__row ${compact ? '' : 'quote-form__row--2col'}`}>
              <div className="quote-form__field">
                <label htmlFor={`email-${source}`}>Email</label>
                <input
                  id={`email-${source}`}
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="quote-form__field">
                <label htmlFor={`phone-${source}`}>Phone Number</label>
                <input
                  id={`phone-${source}`}
                  name="phone"
                  type="tel"
                  placeholder="(___) ___-____"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor={`message-${source}`}>Message</label>
              <textarea
                id={`message-${source}`}
                name="message"
                placeholder="Tell us about your signage needs..."
                rows={compact ? 3 : 5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'error' && (
              <div className="quote-form__error">
                <HiExclamationCircle />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--lg quote-form__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="quote-form__spinner" />
              ) : (
                'Submit'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
