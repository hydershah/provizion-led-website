import SEO from '../components/SEO';
import './LegalPage.css';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms Of Service"
        description="ProVizion LED terms of service. Terms and conditions for using our website and services."
        path="/terms-of-service"
      />

      <section className="legal-page">
        <div className="container container--narrow">
          <h1>Terms Of Service</h1>
          <p className="legal-date">Last updated: January 1, 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the ProVizion LED website, you accept and agree to be bound
            by these terms and conditions. If you do not agree with any part of these terms, you
            may not access our website.
          </p>

          <h2>Services</h2>
          <p>
            ProVizion LED provides LED sign manufacturing, digital sign displays, sign design,
            fabrication, installation, and maintenance services. All services are subject to
            availability and may be modified at our discretion.
          </p>

          <h2>Quotes and Pricing</h2>
          <p>
            All quotes provided are estimates and may be subject to change based on final
            specifications, materials, and installation requirements. A formal agreement will be
            provided before any work begins.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the
            property of ProVizion LED and is protected by applicable intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            ProVizion LED shall not be liable for any indirect, incidental, special, or
            consequential damages arising from the use of our website or services.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="tel:+19842176527">(984) 217-6527</a> or visit 1700 University
            Commercial Pl, Charlotte, NC 28213.
          </p>
        </div>
      </section>
    </>
  );
}
