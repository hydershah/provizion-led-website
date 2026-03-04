import { HiPhone } from 'react-icons/hi';
import SEO from '../../components/SEO';
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
          <FadeUp>
            <h1 id="vc-contact-heading" className="vc-section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Contact Us</h1>
          </FadeUp>

          <div className="vc-contact-layout" style={{ justifyContent: 'center' }}>
            {/* Rating + Contact Details */}
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
