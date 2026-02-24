import SEO from '../components/SEO';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="ProVizion LED privacy policy. Learn how we collect, use, and protect your personal information."
        path="/privacy-policy"
      />

      <section className="legal-page">
        <div className="container container--narrow">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: January 1, 2026</p>

          <h2>Information We Collect</h2>
          <p>
            At ProVizion LED, we collect information you provide directly to us when you
            fill out a contact form, request a quote, or communicate with us. This may include
            your name, email address, phone number, and message content.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide quotes</li>
            <li>Communicate with you about our products and services</li>
            <li>Send text messages if you have opted in</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Text Message Communications</h2>
          <p>
            By providing your phone number to ProVizion LED, you agree and acknowledge that
            ProVizion LED may send text messages to your wireless phone number for any purpose.
            Message frequency will vary, and message and data rates may apply. If you need
            further assistance, please reply &ldquo;HELP&rdquo;. You can opt out at any time by replying
            &ldquo;STOP.&rdquo;
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may
            share information with service providers who assist us in operating our website and
            conducting our business.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="tel:+19842176527">(984) 217-6527</a> or visit us at 1700 University
            Commercial Pl, Charlotte, NC 28213.
          </p>
        </div>
      </section>
    </>
  );
}
