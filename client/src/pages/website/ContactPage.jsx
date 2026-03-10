import { HiPhone, HiShieldCheck, HiLocationMarker, HiClock, HiMail } from 'react-icons/hi';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import { FadeUp, AnimatedStars } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.5!2d-80.7562!3d35.3095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzM0LjIiTiA4MMKwNDUnMjIuMyJX!5e0!3m2!1sen!2sus!4v1';

const SERVICE_AREAS = [
  'Charlotte, NC',
  'Raleigh, NC',
  'Durham, NC',
  'Greensboro, NC',
  'Wilmington, NC',
  'Columbia, SC',
  'Greenville, SC',
  'Surrounding Areas',
];

const BUSINESS_HOURS = [
  { day: 'Monday', time: '8:00 AM - 6:00 PM' },
  { day: 'Tuesday', time: '8:00 AM - 6:00 PM' },
  { day: 'Wednesday', time: '8:00 AM - 6:00 PM' },
  { day: 'Thursday', time: '8:00 AM - 6:00 PM' },
  { day: 'Friday', time: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', time: 'By Appointment' },
  { day: 'Sunday', time: 'Closed' },
];

const TRUST_SIGNALS = [
  { icon: HiShieldCheck, label: 'BBB Accredited' },
  { icon: HiShieldCheck, label: 'Licensed & Insured' },
  { icon: HiShieldCheck, label: '62+ 5-Star Reviews' },
  { icon: HiShieldCheck, label: 'UL Listed' },
];

export default function ContactPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ProVizion LED',
    telephone: '(984) 217-6527',
    email: 'info@provizionledsigns.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1700 University Commercial Pl',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      postalCode: '28213',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact ProVizion LED for a free quote on LED signs, digital displays & custom signage in Charlotte, NC. Call (984) 217-6527 or fill out our form."
        path="/contact-us"
      />
      <SchemaMarkup schema={contactSchema} />

      {/* -- BREADCRUMBS -- */}
      <div className="vc-container" style={{ paddingTop: '100px' }}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Contact Us' },
          ]}
        />
      </div>

      {/* -- CONTACT SECTION -- */}
      <section className="vc-section vc-contact-section" id="contact" style={{ paddingTop: '24px' }} aria-labelledby="vc-contact-heading">
        <div className="vc-container">
          <FadeUp>
            <h1 id="vc-contact-heading" className="vc-section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
              Contact Us
            </h1>
          </FadeUp>

          <div className="vc-contact-layout">
            {/* LEFT COLUMN: Map + Service Areas */}
            <FadeUp delay={0.1}>
              {/* Google Maps Embed */}
              <div className="vc-map-embed">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="ProVizion LED location - 1700 University Commercial Pl, Charlotte, NC 28213"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Service Areas */}
              <h3 style={{ color: '#FFFFFF', marginTop: '32px', marginBottom: '8px', fontFamily: 'var(--vc-font-serif)' }}>
                <HiLocationMarker style={{ verticalAlign: 'middle', color: 'var(--vc-accent)', marginRight: '8px' }} />
                Service Areas
              </h3>
              <div className="vc-service-areas">
                {SERVICE_AREAS.map((area) => (
                  <span key={area} className="vc-service-areas__tag">{area}</span>
                ))}
              </div>

              {/* Business Hours */}
              <h3 style={{ color: '#FFFFFF', marginTop: '32px', marginBottom: '8px', fontFamily: 'var(--vc-font-serif)' }}>
                <HiClock style={{ verticalAlign: 'middle', color: 'var(--vc-accent)', marginRight: '8px' }} />
                Business Hours
              </h3>
              <div className="vc-hours">
                {BUSINESS_HOURS.map(({ day, time }) => (
                  <div key={day} className="vc-hours__row">
                    <span className="vc-hours__day">{day}</span>
                    <span className="vc-hours__time">{time}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* RIGHT COLUMN: Rating + Contact Details */}
            <FadeUp delay={0.2} className="vc-contact-map-side">
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

                {/* Phone */}
                <a
                  href={COMPANY.phoneTel}
                  onClick={() => trackPhoneClick('contact-page')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--vc-accent)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    marginBottom: '16px',
                  }}
                >
                  <HiPhone /> {COMPANY.phone}
                </a>

                {/* Email */}
                <a
                  href="mailto:info@provizionledsigns.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--vc-accent)',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                >
                  <HiMail /> info@provizionledsigns.com
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Trust Signals */}
          <FadeUp delay={0.3}>
            <div className="vc-trust-badges">
              {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                <div key={label} className="vc-trust-badge">
                  <Icon /> {label}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
