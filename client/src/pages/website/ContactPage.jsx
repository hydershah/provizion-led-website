import { Link } from 'react-router-dom';
import { HiPhone, HiLocationMarker } from 'react-icons/hi';
import SEO from '../../components/SEO';
import QuoteForm from '../../components/QuoteForm';
import useThemeClass from '../../hooks/useThemeClass';
import { COMPANY } from '../../utils/constants';
import { FadeUp, AnimatedStars } from './animations';
import './shared.css';

export default function ContactPage() {
  useThemeClass('theme-site');

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact ProVizion LED for custom LED signs, digital displays, and expert consultation in Charlotte, NC. Get a complimentary same-day quote. Call (984) 217-6527."
        path="/contact-us"
      />

      {/* -- CONTACT SECTION -- */}
      <section className="vc-section vc-contact-section" id="contact" style={{ paddingTop: '120px' }} aria-labelledby="vc-contact-heading">
        <div className="vc-container">
          <div className="vc-contact-layout">
            {/* Left: Quote Form */}
            <FadeUp className="vc-contact-form-side">
              <span className="vc-section-label">Get In Touch</span>
              <h1 id="vc-contact-heading" className="vc-section-title">Quick &amp; Same-Day Quotes</h1>

              <QuoteForm source="contact-page" />
              <p className="vc-tcpa-text">
                By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </FadeUp>

            {/* Right: Rating + Contact Details */}
            <FadeUp delay={0.15} className="vc-contact-map-side">
              {/* Rating Card */}
              <div className="vc-hero__trust-row" style={{ marginBottom: '24px' }}>
                <AnimatedStars count={5} />
                <span className="vc-hero__review-count">{COMPANY.reviewCount} Reviews</span>
                <span className="vc-hero__badge">5 STAR RATING</span>
              </div>

              {/* Contact Info Card */}
              <div className="vc-contact-info-card">
                <h3 style={{ color: '#FFFFFF', marginBottom: '16px', fontFamily: 'var(--vc-font-serif)' }}>
                  ProVizion LED Contact Information
                </h3>
                <p style={{ color: 'var(--vc-slate)', marginBottom: '8px' }}>
                  {COMPANY.name}
                </p>
                <p style={{ color: 'var(--vc-slate)', marginBottom: '24px', lineHeight: '1.75' }}>
                  {COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}, United States
                </p>
                <a
                  href={COMPANY.phoneTel}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--vc-accent)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                >
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
