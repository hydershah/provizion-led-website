const { Resend } = require('resend');
const { checkAntiSpam } = require('../server/utils/antiSpam');

function validate(body) {
  const errors = [];
  const { fullName, email, phone, message } = body;

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0)
    errors.push({ field: 'fullName', message: 'Full name is required' });
  else if (fullName.trim().length > 100)
    errors.push({ field: 'fullName', message: 'Name cannot exceed 100 characters' });

  if (!email || !/^\S+@\S+\.\S+$/.test(email))
    errors.push({ field: 'email', message: 'Valid email is required' });

  if (!phone || typeof phone !== 'string' || phone.trim().length === 0)
    errors.push({ field: 'phone', message: 'Phone number is required' });
  else if (!/^[\d\s\-\(\)\+]+$/.test(phone.trim()))
    errors.push({ field: 'phone', message: 'Invalid phone number format' });

  if (!message || typeof message !== 'string' || message.trim().length === 0)
    errors.push({ field: 'message', message: 'Message is required' });
  else if (message.trim().length > 2000)
    errors.push({ field: 'message', message: 'Message cannot exceed 2000 characters' });

  return errors;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.provizionledsigns.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

  // Anti-spam guard runs first so bots never reach the email send.
  const spamCheck = checkAntiSpam(req.body || {});
  if (!spamCheck.ok) {
    // Return a generic success-shaped 400 so bots don't learn what tripped them.
    // Real users won't hit this path because all 4 layers tolerate human behavior.
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[contact] spam blocked:', spamCheck.reason);
    }
    return res.status(400).json({
      success: false,
      message: 'Unable to verify your submission. Please refresh and try again, or call (984) 217-6527.',
    });
  }

  const errors = validate(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const { fullName, email, phone, message } = req.body;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'ProVizion LED <contact@provizionledsigns.com>',
      to: process.env.CONTACT_EMAIL,
      reply_to: email.trim(),
      subject: `New Contact: ${fullName.trim()} - ProVizion LED`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0a0e17;padding:24px;text-align:center;">
            <h1 style="color:#00d4ff;margin:0;">New Contact Request</h1>
          </div>
          <div style="padding:24px;background:#f8fafc;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px;border-bottom:1px solid #e2e8f0;font-weight:bold;width:120px;">Name</td><td style="padding:12px;border-bottom:1px solid #e2e8f0;">${fullName.trim()}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #e2e8f0;font-weight:bold;">Email</td><td style="padding:12px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #e2e8f0;font-weight:bold;">Phone</td><td style="padding:12px;border-bottom:1px solid #e2e8f0;"><a href="tel:${phone.trim()}">${phone.trim()}</a></td></tr>
              <tr><td style="padding:12px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:12px;">${message.trim()}</td></tr>
            </table>
          </div>
          <div style="background:#0a0e17;padding:16px;text-align:center;">
            <p style="color:#94a3b8;margin:0;font-size:12px;">ProVizion LED Signs | (984) 217-6527</p>
          </div>
        </div>`,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please call us at (984) 217-6527.',
    });
  }
};
