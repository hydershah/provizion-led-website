import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import { COMPANY, NAV_LINKS } from '../utils/constants';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* CTA Band */}
      <div className="footer-cta">
        <div className="container footer-cta__inner">
          <div className="footer-cta__text">
            <h3>Ready to get started?</h3>
            <p>Get your free quote today — same-day response guaranteed.</p>
          </div>
          <div className="footer-cta__actions">
            <Link to="/contact-us" className="btn btn--primary btn--lg">
              Get A Free Quote
            </Link>
            <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
              <HiPhone /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-main__grid">
          {/* Brand Column */}
          <div className="footer-col footer-col--brand">
            <Link to="/" aria-label="ProVizion LED Home">
              <img
                src={COMPANY.logo}
                alt="ProVizion LED Logo"
                width="200"
                height="50"
                loading="lazy"
                className="footer-logo"
              />
            </Link>
            <p className="footer-brand__desc">
              LED & Digital Sign Manufacturer specializing in custom sign design,
              fabrication, and installation in Charlotte, NC.
            </p>
            <div className="footer-rating">
              <div className="footer-rating__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="footer-rating__text">
                5 Star Rating (Based on {COMPANY.reviewCount} Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col__title">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col__title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/led-signs">LED Signs</Link></li>
              <li><Link to="/digital-signs">Digital Signs</Link></li>
              <li><Link to="/">Electronic Signs</Link></li>
              <li><Link to="/">Lighted Signs</Link></li>
              <li><Link to="/">Sign Installation</Link></li>
              <li><Link to="/">Sign Maintenance</Link></li>
            </ul>
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>&copy; {currentYear} All Rights Reserved | {COMPANY.name}</p>
          <div className="footer-bottom__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms Of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
