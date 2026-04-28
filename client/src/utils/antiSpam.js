// Client-side anti-spam helpers. No external API.
// Goal: stop bots without ever blocking a real human.

// Generate a fresh, simple math challenge.
// Numbers stay small (1-9) and operation is always addition,
// so any English-speaking human can answer instantly.
export function generateMathChallenge() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return {
    question: `What is ${a} + ${b}?`,
    answer: a + b,
    a,
    b,
  };
}

// The honeypot field name should look attractive to bots that auto-fill
// based on common field names, but mean nothing to humans (it's hidden).
export const HONEYPOT_FIELD = 'website';

// Inline style that hides the honeypot from real users while staying in the
// DOM for bots. We avoid display:none because some scrapers skip those.
export const honeypotStyle = {
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
};

// Build the anti-spam payload to send to the server alongside the form.
// `formStartedAt` is the timestamp captured when the form first mounted.
export function buildAntiSpamPayload({ formStartedAt, honeypotValue, mathAnswer, mathA, mathB }) {
  return {
    _formStartedAt: formStartedAt,
    _hp: honeypotValue || '',
    _ma: mathAnswer ?? '',
    _mq: mathA != null && mathB != null ? `${mathA}+${mathB}` : '',
  };
}
