import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiPhone,
  HiStar,
  HiShieldCheck,
  HiLightBulb,
  HiCube,
  HiTruck,
  HiCog,
  HiChevronRight,
  HiCheckCircle,
  HiLocationMarker,
  HiMail,
  HiClock,
  HiX,
  HiMenu,
  HiChevronDown,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantB.css';

/* ──── Animation Helpers ──── */
function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, direction = 'left', className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
  const y = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerWrap({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerChild({ children, className = '' }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Custom-designed to maximize visibility and brand impact.', icon: '01' },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Update messaging remotely with vibrant, high-resolution screens.', icon: '02' },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage that combines artistry with engineering. Channel letters, cabinet signs, and more.', icon: '03' },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage that establishes a commanding presence for entrances and high-visibility locations.', icon: '04' },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Perfect for promotions, events, and updates.', icon: '05' },
  { title: 'Electronic Message Centers', desc: 'Sophisticated electronic displays with full-color capabilities. Enterprise-grade digital signage for maximum impact.', icon: '06' },
];

const processSteps = [
  { step: 'DESIGN', desc: 'Collaborative design process tailored to your brand. Detailed renderings and engineering specs before fabrication.', icon: <HiLightBulb /> },
  { step: 'FABRICATE', desc: 'In-house manufacturing with precision CNC, LED modules, and quality-controlled assembly to exact specifications.', icon: <HiCube /> },
  { step: 'INSTALL', desc: 'Expert installation by certified crews. Permits, structural engineering, and electrical connections handled.', icon: <HiTruck /> },
  { step: 'MAINTAIN', desc: 'Ongoing support with preventative maintenance, LED replacement, and remote diagnostics for peak performance.', icon: <HiCog /> },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'Decades of combined experience in LED signage design, engineering, and installation.' },
  { title: 'Customized Solutions', desc: 'Every sign is tailored to your brand, location, and budget — no cookie-cutter templates.' },
  { title: 'State-of-the-Art Technology', desc: 'Latest LED modules, drivers, and control systems for maximum performance.' },
  { title: 'Sustainability Focus', desc: 'Energy-efficient LED technology that reduces power consumption while maximizing brightness.' },
  { title: 'Comprehensive Support', desc: 'From design to maintenance — your single point of contact for all signage needs.' },
  { title: 'Local Insights', desc: 'Deep knowledge of NC permitting, zoning, and installation requirements.' },
];

const testimonials = [
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign draws customers from the highway — foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The illumination quality is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
];

const b2bServices = [
  { title: 'Wholesale & Contract Installation', desc: 'Partner with us for bulk manufacturing and certified installation services across the region.' },
  { title: 'White-Label Services', desc: 'We manufacture under your brand with full confidentiality and custom specifications.' },
  { title: 'Trade & Reseller Solutions', desc: 'Special pricing and priority scheduling for sign industry professionals.' },
];

const portfolio = [
  { title: 'Neon Channel Letters — NoDa District', category: 'Channel Letters' },
  { title: 'LED Monument — Corporate Park', category: 'Monument Signs' },
  { title: 'Digital Board — Convention Center', category: 'Digital Displays' },
  { title: 'Illuminated Pylon — Interstate', category: 'Pylon Signs' },
  { title: 'EMC Display — Mega Church', category: 'Message Centers' },
  { title: 'Cabinet Sign — Restaurant Row', category: 'Cabinet Signs' },
];

/* ====================================
   VARIATION B: URBAN INDUSTRIAL TECH
   ==================================== */
export default function VariantB() {
  useThemeClass('theme-vb');
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const meshMove = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <>
      <SEO
        title="Urban Industrial Tech | Design Variant B"
        description="Premium LED sign manufacturer offering design, fabrication & installation. Same-day quotes available. Serving North Carolina businesses."
        keywords="LED signs, custom signage, sign manufacturer, Charlotte NC, LED installation, dark mode"
        path="/variant-b"
      />

      {/* ── HERO ── */}
      <section className="vb-hero" ref={heroRef} id="hero">
        <div className="vb-hero__mesh-bg" />
        <motion.div className="vb-hero__gradient-orb" style={{ y: meshMove }} />

        <div className="vb-hero__inner container">
          <div className="vb-hero__content">
            <SlideIn direction="left" delay={0}>
              <div className="vb-hero__company-name">PROVIZION LED</div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <h1 className="vb-hero__heading">
                Illuminating Your Brand&apos;s{' '}
                <span className="vb-text-glow">Potential</span>
              </h1>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <p className="vb-hero__subhead">
                Full-service LED sign manufacturer — concept design to expert installation and maintenance.
                Custom signage solutions for businesses across North Carolina.
              </p>
            </SlideIn>

            <FadeUp delay={0.4}>
              <div className="vb-hero__trust">
                <div className="vb-hero__stars">
                  {[...Array(5)].map((_, i) => <HiStar key={i} />)}
                  <span>5.0 ({COMPANY.reviewCount} Reviews)</span>
                </div>
                <div className="vb-hero__badges">
                  <span className="vb-badge"><HiShieldCheck /> BBB Accredited</span>
                  <span className="vb-badge"><HiShieldCheck /> Licensed &amp; Insured</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="vb-hero__actions">
                <a href="#contact" className="vb-btn vb-btn--neon">
                  Get Free Quote <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vb-btn vb-btn--ghost">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="vb-hero__visual">
            <div className="vb-hero__wireframe">
              <svg viewBox="0 0 400 300" className="vb-wireframe-svg">
                <defs>
                  <linearGradient id="vb-wire-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB800" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FFB800" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0066FF" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Sign outline */}
                <rect x="40" y="40" width="320" height="160" rx="8" fill="none" stroke="url(#vb-wire-grad)" strokeWidth="1.5" className="vb-wire-draw" />
                {/* Inner frame */}
                <rect x="60" y="60" width="280" height="120" rx="4" fill="none" stroke="rgba(255,184,0,0.3)" strokeWidth="1" className="vb-wire-draw vb-wire-draw--delay" />
                {/* LED dots */}
                {[...Array(8)].map((_, i) => (
                  <circle key={i} cx={80 + i * 35} cy="120" r="4" fill="#FFB800" opacity="0.6" className="vb-led-dot" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
                {/* Mounting brackets */}
                <line x1="100" y1="200" x2="100" y2="250" stroke="rgba(255,184,0,0.2)" strokeWidth="2" />
                <line x1="300" y1="200" x2="300" y2="250" stroke="rgba(255,184,0,0.2)" strokeWidth="2" />
                {/* Text placeholder lines */}
                <rect x="100" y="90" width="200" height="8" rx="4" fill="rgba(0,102,255,0.15)" />
                <rect x="130" y="115" width="140" height="6" rx="3" fill="rgba(0,102,255,0.1)" />
                <rect x="150" y="135" width="100" height="6" rx="3" fill="rgba(0,102,255,0.08)" />
              </svg>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES (Horizontal Snap) ── */}
      <section className="vb-section" id="services" aria-labelledby="vb-services-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">What We Build</span>
            <h2 id="vb-services-heading" className="vb-section-title">Signage Solutions</h2>
          </FadeUp>
        </div>

        <div className="vb-services-scroll-wrap">
          <div className="vb-services-scroll">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.08} className={`vb-service-panel ${i === activeService ? 'vb-service-panel--active' : ''}`}>
                <div className="vb-service-panel__number">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <Link to="/contact-us" className="vb-service-panel__link">
                  Learn More <HiChevronRight />
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="vb-services-progress">
            {services.map((_, i) => (
              <button
                key={i}
                className={`vb-services-dot ${i === activeService ? 'vb-services-dot--active' : ''}`}
                onClick={() => setActiveService(i)}
                aria-label={`Service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="vb-section vb-section--process" id="process" aria-labelledby="vb-process-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">The Process</span>
            <h2 id="vb-process-heading" className="vb-section-title">From Concept to Reality</h2>
            <p className="vb-section-subtitle">Our streamlined four-step process — all in-house fabrication, expert installation.</p>
          </FadeUp>

          <div className="vb-process-timeline">
            <div className="vb-process-line" />
            {processSteps.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.15} className="vb-process-node">
                <div className="vb-process-node__icon-wrap">
                  <div className="vb-process-node__dot" />
                  {step.icon}
                </div>
                <div className="vb-process-node__content">
                  <h3>{step.step}</h3>
                  <p>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B ── */}
      <section className="vb-section" id="b2b" aria-labelledby="vb-b2b-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">For the Trade</span>
            <h2 id="vb-b2b-heading" className="vb-section-title">Contractor &amp; Reseller Solutions</h2>
            <p className="vb-section-subtitle">Partner with NC&apos;s premier sign manufacturer for wholesale, white-label, and expert installation.</p>
          </FadeUp>

          <StaggerWrap className="vb-b2b-grid">
            {b2bServices.map((svc) => (
              <StaggerChild key={svc.title} className="vb-b2b-card">
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vb-b2b-cta">
            <a href={COMPANY.phoneTel} className="vb-btn vb-btn--neon">
              <HiPhone /> Call {COMPANY.phone}
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="vb-section vb-section--alt" id="why-us" aria-labelledby="vb-why-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">The Difference</span>
            <h2 id="vb-why-heading" className="vb-section-title">Why Choose ProVizion</h2>
          </FadeUp>

          <StaggerWrap className="vb-why-grid">
            {whyChoose.map((item, i) => (
              <StaggerChild key={item.title} className="vb-why-card">
                <span className="vb-why-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="vb-section" id="portfolio" aria-labelledby="vb-portfolio-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">Our Work</span>
            <h2 id="vb-portfolio-heading" className="vb-section-title">Recent Installations</h2>
          </FadeUp>

          <StaggerWrap className="vb-portfolio-grid">
            {portfolio.map((item, i) => (
              <StaggerChild key={item.title} className={`vb-portfolio-card ${i === 0 ? 'vb-portfolio-card--wide' : ''}`}>
                <div className="vb-portfolio-card__bg">
                  <HiLightBulb />
                  <span>{item.category}</span>
                </div>
                <div className="vb-portfolio-card__overlay">
                  <span className="vb-portfolio-card__tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="vb-section vb-section--alt" id="testimonials" aria-labelledby="vb-test-heading">
        <div className="container">
          <FadeUp>
            <span className="vb-section-label">Client Feedback</span>
            <h2 id="vb-test-heading" className="vb-section-title">What They Say</h2>
          </FadeUp>

          <StaggerWrap className="vb-testimonials-grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vb-testimonial-card">
                <div className="vb-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <HiStar key={i} />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="vb-testimonial-card__author">
                  <div className="vb-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
                <span className="vb-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vb-testimonials-cta">
            <a href="#contact" className="vb-btn vb-btn--neon">
              Ready to Start? <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="vb-section vb-contact-section" id="contact" aria-labelledby="vb-contact-heading">
        <div className="container">
          <div className="vb-contact-layout">
            <FadeUp className="vb-contact-info">
              <span className="vb-section-label">Get In Touch</span>
              <h2 id="vb-contact-heading" className="vb-section-title">Ready to Illuminate Your Brand?</h2>
              <p className="vb-section-subtitle">Same-day quotes. No obligation. Just expert guidance for your signage project.</p>

              <div className="vb-contact-details">
                <a href={COMPANY.phoneTel} className="vb-contact-item">
                  <HiPhone /> {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="vb-contact-item">
                  <HiMail /> {COMPANY.email}
                </a>
                <div className="vb-contact-item">
                  <HiLocationMarker /> {COMPANY.address.full}
                </div>
                <div className="vb-contact-item">
                  <HiClock /> Mon–Fri 8:00 AM – 6:00 PM
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="vb-contact-form-wrap">
              <QuoteForm source="variant-b" />
              <p className="vb-tcpa-text">
                By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="vb-footer" role="contentinfo">
        <div className="container">
          <div className="vb-footer-grid">
            <div className="vb-footer-col">
              <h4>{COMPANY.name}</h4>
              <p>{COMPANY.address.full}</p>
              <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
            <div className="vb-footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/led-signs">LED Signs</Link></li>
                <li><Link to="/digital-signs">Digital Displays</Link></li>
                <li><Link to="/lighted-signs">Lighted Signs</Link></li>
                <li><Link to="/electronic-signs">Electronic Signs</Link></li>
              </ul>
            </div>
            <div className="vb-footer-col">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/">Design Variants</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="vb-footer-col">
              <h4>Contact</h4>
              <p>Quick &amp; Same-Day Quotes</p>
              <a href={COMPANY.phoneTel} className="vb-btn vb-btn--outline vb-btn--sm">
                <HiPhone /> Call Now
              </a>
            </div>
          </div>
          <div className="vb-footer-bottom">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* ── FLOATING CTA ── */}
      <FloatingCTA />
    </>
  );
}

/* ── Floating CTA ── */
function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contact = document.getElementById('contact');
      if (!contact) { setVisible(window.scrollY > 400); return; }
      const rect = contact.getBoundingClientRect();
      setVisible(window.scrollY > 400 && rect.top > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href="#contact"
      className="vb-floating-cta vb-btn vb-btn--neon"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      Get Free Quote
    </motion.a>
  );
}
