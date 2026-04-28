import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { submitContact } from '../utils/api';
import {
  generateMathChallenge,
  HONEYPOT_FIELD,
  honeypotStyle,
  buildAntiSpamPayload,
} from '../utils/antiSpam';
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
  const [honeypot, setHoneypot] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');
  const [challenge, setChallenge] = useState(() => generateMathChallenge());
  const formStartedAt = useRef(Date.now());

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetSpamGuards = () => {
    setHoneypot('');
    setMathAnswer('');
    setChallenge(generateMathChallenge());
    formStartedAt.current = Date.now();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick client check on the math answer so the user gets instant feedback.
    if (Number(mathAnswer) !== challenge.answer) {
      setStatus('error');
      setErrorMsg('Please answer the verification question correctly.');
      return;
    }

    setStatus('loading');

    const antiSpam = buildAntiSpamPayload({
      formStartedAt: formStartedAt.current,
      honeypotValue: honeypot,
      mathAnswer: Number(mathAnswer),
      mathA: challenge.a,
      mathB: challenge.b,
    });

    try {
      await submitContact({ ...form, source, ...antiSpam });
      setStatus('success');
      setForm(initialState);
      resetSpamGuards();
    } catch (err) {
      setStatus('error');
      const msg =
        err.response?.data?.errors?.[0]?.message ||
        err.response?.data?.message ||
        'Something went wrong. Please call us at (984) 217-6527.';
      setErrorMsg(msg);
      // Rotate the challenge after a failed attempt to break replay attempts.
      setChallenge(generateMathChallenge());
      setMathAnswer('');
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
            noValidate
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

            <div className="quote-form__field">
              <label htmlFor={`math-${source}`}>{challenge.question}</label>
              <input
                id={`math-${source}`}
                name="mathAnswer"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Your answer"
                value={mathAnswer}
                onChange={(e) => setMathAnswer(e.target.value.replace(/[^0-9]/g, ''))}
                required
                autoComplete="off"
              />
            </div>

            {/* Honeypot — hidden from real users, bots auto-fill it */}
            <div style={honeypotStyle} aria-hidden="true">
              <label htmlFor={`${HONEYPOT_FIELD}-${source}`}>Website (leave blank)</label>
              <input
                id={`${HONEYPOT_FIELD}-${source}`}
                name={HONEYPOT_FIELD}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
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
