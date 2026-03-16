const { Resend } = require('resend');

const sendContactEmail = async ({ fullName, email, phone, message }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('--- DEV EMAIL LOG ---');
    console.log(`From: ${fullName} <${email}>`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log('--- END EMAIL LOG ---');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0a0e17; padding: 24px; text-align: center;">
        <h1 style="color: #00d4ff; margin: 0;">New Contact Request</h1>
      </div>
      <div style="padding: 24px; background: #f8fafc;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 12px;">${message}</td>
          </tr>
        </table>
      </div>
      <div style="background: #0a0e17; padding: 16px; text-align: center;">
        <p style="color: #94a3b8; margin: 0; font-size: 12px;">ProVizion LED Signs | (984) 217-6527</p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: 'ProVizion LED <contact@provizionledsigns.com>',
    to: process.env.CONTACT_EMAIL,
    reply_to: email,
    subject: `New Contact: ${fullName} - ProVizion LED`,
    html: htmlContent,
  });
};

module.exports = { sendContactEmail };
