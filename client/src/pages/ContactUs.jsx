import { HiPhone, HiLocationMarker, HiMail } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact ProVizion LED for custom LED signs, digital displays, and sign installation in Charlotte, NC. Call (984) 217-6527 for a free quote. Same-day response guaranteed."
        keywords="contact ProVizion LED, LED sign quote, digital sign consultation, Charlotte NC sign company, free sign quote"
        path="/contact-us"
      />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-hero__pattern" />
        </div>
        <div className="container contact-hero__inner">
          <AnimateOnScroll>
            <span className="section-label">Contact Us</span>
            <h1 className="contact-hero__title">
              ProVizion LED <span className="text-accent">Contact Information</span>
            </h1>
            <p className="contact-hero__desc">
              Ready to get started? Reach out for a free consultation and same-day quote.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section section--lg contact-section">
        <div className="container contact-grid">
          {/* INFO COLUMN */}
          <AnimateOnScroll>
            <div className="contact-info">
              <div className="contact-info__card">
                <h2 className="contact-info__name">{COMPANY.name}</h2>

                <div className="contact-info__item">
                  <HiLocationMarker className="contact-info__icon" />
                  <div>
                    <h4>Address</h4>
                    <p>1700 University Commercial Place,<br />Charlotte, North Carolina 28213,<br />United States</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <HiPhone className="contact-info__icon" />
                  <div>
                    <h4>Phone</h4>
                    <a href={COMPANY.phoneTel} className="contact-info__phone">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="contact-rating-card">
                <div className="contact-rating-card__stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3>5 Star Rating</h3>
                <p>(Based on {COMPANY.reviewCount} Reviews)</p>
              </div>

              {/* Map Embed */}
              <div className="contact-map">
                <iframe
                  title="ProVizion LED Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.4!2d-80.7847!3d35.2771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1700+University+Commercial+Pl%2C+Charlotte%2C+NC+28213!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* FORM COLUMN */}
          <AnimateOnScroll variant="scaleIn">
            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <h2>Quick & Same-Day Quotes</h2>
                <p>Fill out the form and we&apos;ll get back to you within 24 hours.</p>
              </div>
              <QuoteForm source="contact-page" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SMS CONSENT */}
      <section className="contact-consent">
        <div className="container">
          <p>
            By providing my phone number to ProVizion LED, I agree and acknowledge that
            ProVizion LED may send text messages to my wireless phone number for any purpose.
            Message frequency will vary, and Message and data rates may apply. If you need
            further assistance, please reply &ldquo;HELP&rdquo;. You can also opt out by replying
            &ldquo;STOP.&rdquo; For more information on how your data will be handled, please visit
            our <a href="/privacy-policy">privacy policy</a>.
          </p>
        </div>
      </section>
    </>
  );
}
