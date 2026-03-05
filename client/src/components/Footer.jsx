import { Link } from 'react-router-dom';
import { HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import { useSanityContext } from '../context/SanityContext';
import { urlFor } from '../lib/sanity';
import QuoteForm from './QuoteForm';
import './Footer.css';

export default function Footer() {
  const { company: COMPANY } = useSanityContext();
  const currentYear = new Date().getFullYear();
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  return (
    <section className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* CTA Band with Quote Form */}
      <div className="footer-cta">
        <div className="container footer-cta__inner">
          <div className="footer-cta__text">
            <h3>Ready to get started?</h3>
            <a href={COMPANY.phoneTel} className="footer-cta__phone">
              <HiPhone /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="footer-form-section">
        <div className="container footer-form__inner">
          <Link to="/" aria-label="ProVizion LED Home">
            <img
              src={logoSrc}
              alt="ProVizion LED Logo"
              width="200"
              height="50"
              loading="lazy"
              className="footer-logo"
            />
          </Link>
          <p className="footer-form__heading">Quick &amp; Same-Day Quotes</p>
          <QuoteForm source="footer" />
          <div className="footer-rating">
            <p className="footer-rating__brand">{COMPANY.name}</p>
            <p className="footer-rating__label">5 STAR RATING</p>
            <div className="footer-rating__stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="footer-rating__text">
              (Based on {COMPANY.reviewCount} Reviews)
            </span>
          </div>
          <p className="footer-tcpa">
            By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may
            send text messages to my wireless phone number for any purpose. Message frequency will vary, and
            Message and data rates may apply. If you need further assistance, please reply &quot;HELP&quot;.
            You can also opt out by replying &quot;STOP.&quot; For more information on how your data will be
            handled, please visit our <Link to="/privacy-policy">privacy policy</Link>.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-main__grid">
          {/* Brand Column */}
          <div className="footer-col footer-col--brand">
            <Link to="/" aria-label="ProVizion LED Home">
              <img
                src={logoSrc}
                alt="ProVizion LED Logo"
                width="200"
                height="50"
                loading="lazy"
                className="footer-logo"
              />
            </Link>
            <p className="footer-brand__desc">
              &copy; {currentYear} {COMPANY.name}
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col__title">Contact Information</h4>
            <ul className="footer-contact">
              <li>
                <HiLocationMarker className="footer-contact__icon" />
                <span>{COMPANY.address.full}</span>
              </li>
              <li>
                <HiPhone className="footer-contact__icon" />
                <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col__title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Sign Manufacturer</Link></li>
              <li><Link to="/led-signs">Led Signs</Link></li>
              <li><Link to="/digital-signs">Digital Signs</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms Of Service</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>&copy; {currentYear} All Rights Reserved | {COMPANY.name}</p>
        </div>
      </div>
    </section>
  );
}
