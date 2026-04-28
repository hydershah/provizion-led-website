// Server-side anti-spam checks. Tuned to never reject a real lead.
// Returns { ok: true } on pass, or { ok: false, reason } on fail.

const MIN_FILL_TIME_MS = 3000;        // humans take >3s to fill name+email+phone
const MAX_FORM_AGE_MS = 60 * 60 * 1000; // 1 hour — stops replayed/cached forms

// Conservative spam keyword list — only blatant patterns no real customer
// signing up for an LED sign quote would ever write.
const SPAM_KEYWORDS = [
  'viagra', 'cialis', 'casino', 'porn', 'xxx',
  'crypto investment', 'forex signals', 'binary option',
  'seo services', 'rank your website', 'rank your site',
  'guest post', 'guest posting', 'backlink package',
  'increase traffic', 'buy followers', 'mass mailing',
];

function containsCyrillicOrCJK(value) {
  if (!value || typeof value !== 'string') return false;
  // Real customers are local-business prospects in the US; foreign-script
  // names in *the name field* are an extremely strong bot signal.
  return /[Ѐ-ӿ一-鿿぀-ヿ가-힯]/.test(value);
}

function countUrls(value) {
  if (!value || typeof value !== 'string') return 0;
  const matches = value.match(/https?:\/\/|www\.|\.(ru|cn|tk|xyz|top|click)\b/gi);
  return matches ? matches.length : 0;
}

function hasSpamKeyword(value) {
  if (!value || typeof value !== 'string') return false;
  const lower = value.toLowerCase();
  return SPAM_KEYWORDS.some((kw) => lower.includes(kw));
}

// Validate the anti-spam fields posted by the client.
// `body` is the parsed request body (req.body).
function checkAntiSpam(body) {
  // 1. Honeypot — humans never see this field.
  if (body && body._hp && String(body._hp).trim().length > 0) {
    return { ok: false, reason: 'honeypot' };
  }

  // 2. Time gate — too-fast submissions are bots.
  const startedAt = Number(body && body._formStartedAt);
  if (Number.isFinite(startedAt) && startedAt > 0) {
    const elapsed = Date.now() - startedAt;
    if (elapsed < MIN_FILL_TIME_MS) {
      return { ok: false, reason: 'too_fast' };
    }
    if (elapsed > MAX_FORM_AGE_MS) {
      return { ok: false, reason: 'stale_form' };
    }
  }

  // 3. Math challenge (only enforced when both question + answer are present,
  //    so the simpler HeroLeadForm without a math question is unaffected).
  if (body && body._mq) {
    const match = String(body._mq).match(/^(\d+)\+(\d+)$/);
    if (!match) return { ok: false, reason: 'math_invalid' };
    const expected = Number(match[1]) + Number(match[2]);
    const provided = Number(body._ma);
    if (!Number.isFinite(provided) || provided !== expected) {
      return { ok: false, reason: 'math_wrong' };
    }
  }

  // 4. Content heuristics — high-tolerance, only blatant bot patterns.
  const fullName = (body && body.fullName) || '';
  const message = (body && body.message) || '';

  if (containsCyrillicOrCJK(fullName)) {
    return { ok: false, reason: 'name_script' };
  }

  if (countUrls(message) >= 4) {
    return { ok: false, reason: 'too_many_links' };
  }

  if (hasSpamKeyword(message) || hasSpamKeyword(fullName)) {
    return { ok: false, reason: 'spam_keyword' };
  }

  return { ok: true };
}

module.exports = { checkAntiSpam, MIN_FILL_TIME_MS, MAX_FORM_AGE_MS };
