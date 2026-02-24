/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiStar,
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiClock,
  HiUserGroup,
  HiLightBulb,
  HiCurrencyDollar,
  HiThumbUp,
  HiTruck,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantI.css';

/* ──── Animation Helpers ──── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const StaggerWrap = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.div>
  );
};

const StaggerChild = ({ children, className = '' }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

/* ──── Data ──── */
const SERVICES = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Engineered for maximum visibility when the lights go down.', icon: <HiLightBulb /> },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Vibrant, high-resolution screens that captivate day and night.', icon: <HiCurrencyDollar /> },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage combining artistry with engineering. Channel letters, cabinet signs, and beyond.', icon: <HiLightBulb /> },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage that establishes a commanding nighttime presence at entrances and high-visibility locations.', icon: <HiShieldCheck /> },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Promotions, events, and community updates around the clock.', icon: <HiThumbUp /> },
  { title: 'Electronic Message Centers', desc: 'Sophisticated full-color electronic displays. Enterprise-grade digital signage for maximum audience engagement after dark.', icon: <HiUserGroup /> },
];

const PROCESS = [
  { scene: '01', title: 'Consultation', desc: 'We listen to your vision, audit your location, and develop a signage strategy tailored to your brand and budget.' },
  { scene: '02', title: 'Design', desc: 'Our team creates detailed 3D renderings and engineering specifications so you see your sign before fabrication begins.' },
  { scene: '03', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC cutting, premium LED modules, and rigorous quality control at every stage.' },
  { scene: '04', title: 'Installation', desc: 'Expert installation by certified crews. We handle permits, structural engineering, and electrical connections for a flawless reveal.' },
];

const B2B_PERKS = [
  { text: 'Franchise-ready signage packages', icon: <HiCheckCircle /> },
  { text: 'Dedicated account management', icon: <HiCheckCircle /> },
  { text: 'Volume pricing tiers', icon: <HiCheckCircle /> },
  { text: 'Nationwide installation coordination', icon: <HiCheckCircle /> },
  { text: 'White-label fabrication services', icon: <HiCheckCircle /> },
];

const WHY_US = [
  { title: 'Decades of Expertise', desc: 'Combined decades of experience in LED signage design, engineering, and installation.', icon: <HiShieldCheck /> },
  { title: 'Custom Fabrication', desc: 'Every sign is tailored to your brand, location, and budget. No templates, no shortcuts.', icon: <HiLightBulb /> },
  { title: 'Latest Technology', desc: 'We use cutting-edge LED modules, drivers, and control systems for peak performance.', icon: <HiThumbUp /> },
  { title: 'Full-Service Support', desc: 'Design through maintenance — one point of contact for your entire signage lifecycle.', icon: <HiUserGroup /> },
  { title: 'NC Permitting Experts', desc: 'Deep knowledge of North Carolina zoning, permitting, and installation requirements.', icon: <HiTruck /> },
  { title: 'Energy Efficient', desc: 'Eco-conscious LED technology that reduces power consumption while maximizing brightness.', icon: <HiCurrencyDollar /> },
];

const PORTFOLIO = [
  { title: 'Charlotte Gateway Monument', type: 'Monument Sign', visual: '\u{1F3D9}', variant: 'dark' },
  { title: 'SouthEnd Digital Wall', type: 'Digital Display', visual: '\u{1F4FA}', variant: 'accent' },
  { title: 'Plaza Midwood Channel Letters', type: 'Channel Letters', visual: '\u{2728}', variant: 'dark' },
  { title: 'Ballantyne EMC Board', type: 'Message Center', visual: '\u{1F4E1}', variant: 'accent' },
  { title: 'Uptown Medical Wayfinding', type: 'Wayfinding', visual: '\u{1F3E5}', variant: 'dark' },
  { title: 'Northlake Auto Display', type: 'LED Board', visual: '\u{1F697}', variant: 'accent' },
];

const TESTIMONIALS = [
  {
    text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.',
    author: 'James Mitchell',
    role: 'Mitchell Auto Group',
  },
  {
    text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of illumination is exceptional.',
    author: 'Sarah Chen',
    role: 'Brightside Medical Center',
  },
  {
    text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.',
    author: 'David Ramirez',
    role: 'Ramirez Restaurant Group',
  },
];

/* ════════════════════════════════════════════════════
   VARIANT I: CINEMATIC NOIR
   ════════════════════════════════════════════════════ */
export default function VariantI() {
  useThemeClass('theme-vi');
  const [showCta, setShowCta] = useState(false);
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { margin: '-100px' });

  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vi-page">
      <SEO
        title="Cinematic Noir | ProVizion LED"
        description="Dramatic, cinematic LED signage solutions from ProVizion LED. Custom LED signs, digital displays, and electronic message centers — designed to shine at night. Charlotte, NC."
        keywords="LED signs, cinematic signage, Charlotte NC, night signs, dramatic LED, digital displays"
        path="/variant-i"
      />

      {/* ═══ HERO ═══ */}
      <section className="vi-hero" id="hero">
        <div className="vi-hero__spotlight" />
        <div className="vi-hero__grain" />
        <div className="vi-hero__inner">
          <div className="vi-hero__content">
            <FadeUp>
              <div className="vi-hero__trust">
                <HiStar className="vi-hero__star" />
                <span>{COMPANY.rating}-Star Rated ({COMPANY.reviewCount} Reviews)</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="vi-hero__heading">
                Your Brand,<br />
                <span className="vi-hero__heading-accent">Under the</span><br />
                <span className="vi-hero__heading-accent">Spotlight</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="vi-hero__sub">
                Full-service LED sign manufacturer — from concept design to expert installation.
                Custom signage solutions that make their biggest impact when the sun goes down.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="vi-hero__actions">
                <a href="#vi-contact" className="vi-btn vi-btn--accent">
                  Get Free Quote <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vi-btn vi-btn--ghost">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="vi-hero__badges">
                <span className="vi-badge"><HiShieldCheck /> BBB Accredited</span>
                <span className="vi-badge"><HiShieldCheck /> Licensed &amp; Insured</span>
                <span className="vi-badge"><HiClock /> Same-Day Quotes</span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="vi-hero__visual">
            <div className="vi-hero__sign-frame">
              <div className="vi-hero__sign-glow" />
              <div className="vi-hero__sign-letter">P</div>
            </div>
            <div className="vi-hero__stats">
              <div className="vi-hero__stat">
                <span className="vi-hero__stat-num">500+</span>
                <span className="vi-hero__stat-label">Signs Installed</span>
              </div>
              <div className="vi-hero__stat">
                <span className="vi-hero__stat-num">15+</span>
                <span className="vi-hero__stat-label">Years Experience</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vi-section" id="services" aria-labelledby="vi-services-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">Our Craft</span>
            <h2 id="vi-services-heading" className="vi-heading">Signage That Commands the Night</h2>
            <p className="vi-subtitle">Six categories of premium LED signage, each engineered for maximum visibility and dramatic impact.</p>
          </FadeUp>

          <StaggerWrap className="vi-services__grid">
            {SERVICES.map((svc) => (
              <StaggerChild key={svc.title} className="vi-service-card">
                <div className="vi-service-card__icon">{svc.icon}</div>
                <h3 className="vi-service-card__title">{svc.title}</h3>
                <p className="vi-service-card__desc">{svc.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER 1 ═══ */}
      <section className="vi-cta-banner">
        <div className="vi-cta-banner__grain" />
        <div className="vi-container">
          <FadeUp>
            <div className="vi-cta-banner__inner">
              <h2 className="vi-cta-banner__heading">Ready to Light Up Your Business?</h2>
              <p className="vi-cta-banner__sub">Get a same-day quote from Charlotte&apos;s premier LED sign manufacturer. No obligation.</p>
              <a href="#vi-contact" className="vi-btn vi-btn--accent">
                Request a Quote <HiArrowRight />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vi-section vi-section--dark" id="process" aria-labelledby="vi-process-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">The Production</span>
            <h2 id="vi-process-heading" className="vi-heading">Four Scenes to Your Sign</h2>
            <p className="vi-subtitle">Our streamlined production process ensures quality at every stage — all in-house, all on schedule.</p>
          </FadeUp>

          <StaggerWrap className="vi-process__grid">
            {PROCESS.map((step) => (
              <StaggerChild key={step.scene} className="vi-process-card">
                <div className="vi-process-card__scene">Scene {step.scene}</div>
                <h3 className="vi-process-card__title">{step.title}</h3>
                <p className="vi-process-card__desc">{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vi-section vi-section--alt" id="b2b" aria-labelledby="vi-b2b-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">Enterprise Programs</span>
            <h2 id="vi-b2b-heading" className="vi-heading">Multi-Location Signage at Scale</h2>
            <p className="vi-subtitle">
              ProVizion LED partners with franchises, property management groups, and
              multi-location businesses to deliver consistent signage programs nationwide.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="vi-b2b__inner">
              <div className="vi-b2b__perks">
                {B2B_PERKS.map((perk) => (
                  <div key={perk.text} className="vi-b2b__perk">
                    {perk.icon}
                    <span>{perk.text}</span>
                  </div>
                ))}
              </div>
              <div className="vi-b2b__cta-wrap">
                <a href="#vi-contact" className="vi-btn vi-btn--accent">
                  Partner With Us <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vi-btn vi-btn--ghost">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vi-section" id="why-us" aria-labelledby="vi-why-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">The Difference</span>
            <h2 id="vi-why-heading" className="vi-heading">Why ProVizion LED</h2>
            <p className="vi-subtitle">The edge that sets us apart from every other sign company.</p>
          </FadeUp>

          <StaggerWrap className="vi-why__grid">
            {WHY_US.map((item) => (
              <StaggerChild key={item.title} className="vi-why-card">
                <div className="vi-why-card__icon">{item.icon}</div>
                <h3 className="vi-why-card__title">{item.title}</h3>
                <p className="vi-why-card__desc">{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vi-section vi-section--dark" id="portfolio" aria-labelledby="vi-portfolio-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">Featured Work</span>
            <h2 id="vi-portfolio-heading" className="vi-heading">Recent Productions</h2>
            <p className="vi-subtitle">A selection of dramatic LED signage installations across North Carolina and beyond.</p>
          </FadeUp>

          <StaggerWrap className="vi-portfolio__grid">
            {PORTFOLIO.map((item) => (
              <StaggerChild key={item.title} className={`vi-portfolio-card vi-portfolio-card--${item.variant}`}>
                <div className="vi-portfolio-card__visual">
                  <span className="vi-portfolio-card__emoji">{item.visual}</span>
                </div>
                <div className="vi-portfolio-card__body">
                  <span className="vi-portfolio-card__type">{item.type}</span>
                  <h3 className="vi-portfolio-card__title">{item.title}</h3>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vi-section" id="testimonials" aria-labelledby="vi-testimonials-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">Rave Reviews</span>
            <h2 id="vi-testimonials-heading" className="vi-heading">What Our Clients Say</h2>
            <p className="vi-subtitle">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified Google reviews.</p>
          </FadeUp>

          <StaggerWrap className="vi-testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <StaggerChild key={t.author} className="vi-testimonial-card">
                <div className="vi-testimonial-card__film-strip" />
                <div className="vi-testimonial-card__stars">
                  {Array.from({ length: 5 }, (_, i) => <HiStar key={i} />)}
                </div>
                <blockquote className="vi-testimonial-card__text">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="vi-testimonial-card__author">
                  <div className="vi-testimonial-card__avatar">{t.author.charAt(0)}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
                <span className="vi-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vi-testimonials__cta">
            <a href="#vi-contact" className="vi-btn vi-btn--accent">
              Start Your Project <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA BANNER 2 ═══ */}
      <section className="vi-cta-banner vi-cta-banner--alt">
        <div className="vi-cta-banner__grain" />
        <div className="vi-container">
          <FadeUp>
            <div className="vi-cta-banner__inner">
              <h2 className="vi-cta-banner__heading">Your Sign Deserves the Spotlight</h2>
              <p className="vi-cta-banner__sub">Join 500+ businesses that trust ProVizion LED for signage that demands attention.</p>
              <div className="vi-cta-banner__actions">
                <a href="#vi-contact" className="vi-btn vi-btn--accent">
                  Get Free Quote <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vi-btn vi-btn--ghost">
                  <HiPhone /> Call Now
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="vi-section vi-section--contact" id="vi-contact" ref={contactRef} aria-labelledby="vi-contact-heading">
        <div className="vi-divider" />
        <div className="vi-container">
          <FadeUp>
            <span className="vi-kicker">Get In Touch</span>
            <h2 id="vi-contact-heading" className="vi-heading">Let&apos;s Create Something Dramatic</h2>
            <p className="vi-subtitle">Get a same-day quote for your custom LED signage project. No obligation — just expert guidance.</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="vi-contact__inner">
              <div className="vi-contact__info">
                <div className="vi-contact__info-item">
                  <HiPhone className="vi-contact__info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="vi-contact__info-item">
                  <HiMail className="vi-contact__info-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </div>
                </div>
                <div className="vi-contact__info-item">
                  <HiLocationMarker className="vi-contact__info-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>{COMPANY.address.full}</p>
                  </div>
                </div>
                <div className="vi-contact__info-item">
                  <HiClock className="vi-contact__info-icon" />
                  <div>
                    <h4>Hours</h4>
                    <p>Mon &ndash; Fri: 8 AM &ndash; 6 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="vi-contact__form-wrap">
                <QuoteForm source="variant-i" />
                <p className="vi-contact__tcpa">
                  By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ FOOTER BAR ═══ */}
      <div className="vi-footerbar" role="contentinfo">
        <div className="vi-container">
          <div className="vi-footerbar__brand">PROVIZION <span>LED</span></div>
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="vi-footerbar__links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/">All Variants</Link>
          </div>
        </div>
      </div>

      {/* ═══ FLOATING CTA ═══ */}
      {showCta && !contactInView && (
        <motion.div
          className="vi-floating-cta"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
        >
          <a href="#vi-contact" className="vi-btn vi-btn--accent">
            Get Free Quote <HiArrowRight />
          </a>
        </motion.div>
      )}
    </div>
  );
}
