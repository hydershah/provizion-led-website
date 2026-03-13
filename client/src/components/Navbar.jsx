import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiChevronDown } from 'react-icons/hi';
import { useSanityContext } from '../context/SanityContext';
import { urlFor } from '../lib/sanity';
import { trackPhoneClick } from '../utils/analytics';
import './Navbar.css';

const SERVICE_PATHS = new Set([
  '/digital-signs', '/electronic-signs', '/led-signs', '/lighted-signs',
  '/video-wall', '/channel-letters', '/monument-signs', '/pylon-signs',
]);

export default function Navbar() {
  const { company: COMPANY, navLinks: NAV_LINKS } = useSanityContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  const topLinks = NAV_LINKS.filter((l) => !SERVICE_PATHS.has(l.path));
  const serviceLinks = NAV_LINKS.filter((l) => SERVICE_PATHS.has(l.path));
  const isServiceActive = SERVICE_PATHS.has(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar__inner">
          <span className="top-bar__text">LED & Digital Sign Manufacturer — Charlotte, NC</span>
          <a href={COMPANY.phoneTel} className="top-bar__phone" onClick={() => trackPhoneClick('navbar-topbar')}>
            <HiPhone /> {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="ProVizion LED Home">
            <img
              src={COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(360).url() : (COMPANY.logo || '/images/provizion-logo-white.webp')}
              alt="ProVizion LED Logo"
              width="180"
              height="45"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {/* Home */}
            <NavLink to="/" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} end>
              Sign Manufacturer
            </NavLink>

            {/* Services Dropdown */}
            {serviceLinks.length > 0 && (
              <div
                className={`navbar__dropdown ${isServicesOpen ? 'navbar__dropdown--open' : ''}`}
                ref={servicesRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`navbar__link navbar__dropdown-trigger ${isServiceActive ? 'navbar__link--active' : ''}`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Sign Types <HiChevronDown className="navbar__chevron" />
                </button>
                {isServicesOpen && (
                  <div className="navbar__dropdown-menu">
                    {serviceLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `navbar__dropdown-item ${isActive ? 'navbar__dropdown-item--active' : ''}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Locations, Blog & Contact */}
            <NavLink to="/locations" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
              Locations
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
              Contact Us
            </NavLink>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="navbar__actions">
            <Link to="/contact-us" className="btn btn--primary btn--sm navbar__cta">
              Get A Free Quote
            </Link>
            <button
              className="navbar__toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu__inner">
              <nav className="mobile-menu__nav">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                      }
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-menu__footer">
                <Link to="/contact-us" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                  Get A Free Quote
                </Link>
                <a href={COMPANY.phoneTel} className="mobile-menu__phone" onClick={() => trackPhoneClick('navbar-mobile-menu')}>
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
