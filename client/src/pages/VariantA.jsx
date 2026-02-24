import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantA.css';

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
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Custom-designed to maximize visibility and brand impact day and night.', icon: <HiLightBulb />, featured: true },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Update messaging remotely with vibrant, high-resolution screens.', icon: <HiCube /> },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage that combines artistry with engineering. Channel letters, cabinet signs, and more.', icon: <HiLightBulb /> },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage that establishes a commanding presence. Custom-built for entrances and high-visibility locations.', icon: <HiCube /> },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Perfect for promotions, events, and community updates.', icon: <HiCog /> },
  { title: 'Electronic Message Centers', desc: 'Sophisticated electronic displays with full-color capabilities. Enterprise-grade digital signage for maximum audience engagement.', icon: <HiCube /> },
];

const processSteps = [
  { step: '01', title: 'Design', desc: 'Collaborative design process tailored to your brand. We create detailed renderings and engineering specs before fabrication begins.', icon: <HiLightBulb /> },
  { step: '02', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC, LED modules, and quality-controlled assembly. Every sign built to exact specifications.', icon: <HiCube /> },
  { step: '03', title: 'Installation', desc: 'Expert installation by certified crews. We handle permits, structural engineering, and electrical connections for a flawless result.', icon: <HiTruck /> },
  { step: '04', title: 'Maintenance', desc: 'Ongoing support with preventative maintenance, LED replacement, and remote diagnostics to keep your signs performing perfectly.', icon: <HiCog /> },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'Decades of combined experience in LED signage design, engineering, and installation.' },
  { title: 'Customized Solutions', desc: 'Every sign is tailored to your brand, location, and budget — no cookie-cutter templates.' },
  { title: 'State-of-the-Art Technology', desc: 'We use the latest LED modules, drivers, and control systems for maximum performance.' },
  { title: 'Sustainability Focus', desc: 'Energy-efficient LED technology that reduces power consumption while maximizing brightness.' },
  { title: 'Comprehensive Support', desc: 'From design to maintenance, we are your single point of contact for all signage needs.' },
  { title: 'Local Insights', desc: 'Deep knowledge of North Carolina permitting, zoning, and installation requirements.' },
];

const testimonials = [
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of the illumination is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
];

const b2bServices = [
  { title: 'Wholesale & Contract Installation', desc: 'Partner with us for bulk manufacturing and certified installation services.' },
  { title: 'White-Label Services', desc: 'We manufacture under your brand. Full confidentiality and custom specifications.' },
  { title: 'Trade & Reseller Solutions', desc: 'Special pricing and priority scheduling for sign industry professionals.' },
];

/* ──── Lightbox ──── */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div className="va-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button className="va-lightbox__close" onClick={onClose} aria-label="Close lightbox"><HiX /></button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </motion.div>
  );
}

const portfolio = [
  { title: 'Channel Letters — Downtown Charlotte', category: 'Channel Letters' },
  { title: 'LED Monument — Corporate Campus', category: 'Monument Signs' },
  { title: 'Digital Display — Shopping Center', category: 'Digital Displays' },
  { title: 'Illuminated Cabinet — Restaurant Row', category: 'Cabinet Signs' },
  { title: 'Electronic Message Center — Church', category: 'Message Centers' },
  { title: 'Pylon Sign — Auto Dealership', category: 'Pylon Signs' },
];

/* ====================================
   VARIATION A: LUMINOUS MINIMALISM
   ==================================== */
export default function VariantA() {
  useThemeClass('theme-va');
  const [lightboxImg, setLightboxImg] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="Luminous Minimalism | Design Variant A"
        description="Premium LED sign manufacturer offering design, fabrication & installation. Same-day quotes available. Serving North Carolina businesses."
        keywords="LED signs, custom signage, sign manufacturer, Charlotte NC, LED installation"
        path="/variant-a"
      />

      {/* ── HERO ── */}
      <section className="va-hero" ref={heroRef} id="hero">
        {/* Animated LED Grid Background */}
        <div className="va-hero__grid-bg" />
        <motion.div className="va-hero__parallax-layer" style={{ y: heroParallax }} />

        <div className="va-hero__inner container">
          <div className="va-hero__content">
            <FadeUp>
              <div className="va-hero__trust-badge">
                <HiStar className="va-hero__star" />
                <span>5-Star Rated ({COMPANY.reviewCount} Reviews)</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="va-hero__heading">
                <span className="va-hero__heading-accent">Illuminating</span>{' '}
                Your Brand&apos;s Potential
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="va-hero__subhead">
                Full-service LED sign manufacturer — from concept design to expert installation and
                ongoing maintenance. Custom signage solutions for businesses across North Carolina.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="va-hero__actions">
                <a href="#contact" className="va-btn va-btn--primary va-btn--glow">
                  Get Free Quote <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="va-btn va-btn--glass">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="va-hero__badges">
                <span className="va-badge"><HiShieldCheck /> BBB Accredited</span>
                <span className="va-badge"><HiShieldCheck /> Licensed &amp; Insured</span>
                <span className="va-badge"><HiClock /> Quick &amp; Same-Day Quotes</span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="va-hero__visual">
            <div className="va-hero__sign-mockup">
              <div className="va-hero__glow-ring" />
              <div className="va-hero__sign-placeholder">
                <span>P</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="va-section" id="services" aria-labelledby="va-services-heading">
        <div className="container">
          <FadeUp>
            <span className="va-section-label">What We Create</span>
            <h2 id="va-services-heading" className="va-section-title">Signage Solutions</h2>
            <p className="va-section-subtitle">Six categories of premium LED signage, each engineered for maximum visibility and longevity.</p>
          </FadeUp>

          <StaggerWrap className="va-services-grid">
            {services.map((svc) => (
              <StaggerChild key={svc.title} className={`va-service-card ${svc.featured ? 'va-service-card--featured' : ''}`}>
                <div className="va-service-card__icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <Link to="/contact-us" className="va-service-card__link">
                  Learn More <HiChevronRight />
                </Link>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="va-section va-section--alt" id="process" aria-labelledby="va-process-heading">
        <div className="container">
          <FadeUp>
            <span className="va-section-label">The Journey</span>
            <h2 id="va-process-heading" className="va-section-title">From Concept to Installation</h2>
            <p className="va-section-subtitle">Our streamlined four-step process ensures quality at every stage — all in-house.</p>
          </FadeUp>

          <StaggerWrap className="va-process-timeline">
            {processSteps.map((step) => (
              <StaggerChild key={step.step} className="va-process-step">
                <div className="va-process-step__number">{step.step}</div>
                <div className="va-process-step__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── B2B SECTION ── */}
      <section className="va-section" id="b2b" aria-labelledby="va-b2b-heading">
        <div className="container">
          <div className="va-b2b-layout">
            <FadeUp className="va-b2b-content">
              <span className="va-section-label">For the Trade</span>
              <h2 id="va-b2b-heading" className="va-section-title">Contractor &amp; Reseller Solutions</h2>
              <p className="va-section-subtitle">Partner with North Carolina&apos;s premier sign manufacturer for wholesale pricing, white-label fabrication, and expert installation support.</p>

              <div className="va-b2b-cards">
                {b2bServices.map((svc) => (
                  <div key={svc.title} className="va-b2b-card">
                    <h4>{svc.title}</h4>
                    <p>{svc.desc}</p>
                  </div>
                ))}
              </div>

              <div className="va-b2b-cta">
                <a href={COMPANY.phoneTel} className="va-btn va-btn--primary">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="va-section va-section--alt" id="why-us" aria-labelledby="va-why-heading">
        <div className="container">
          <FadeUp>
            <span className="va-section-label">The ProVizion Difference</span>
            <h2 id="va-why-heading" className="va-section-title">Why Choose Us</h2>
          </FadeUp>

          <StaggerWrap className="va-why-grid">
            {whyChoose.map((item) => (
              <StaggerChild key={item.title} className="va-why-card">
                <HiCheckCircle className="va-why-card__icon" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="va-section" id="portfolio" aria-labelledby="va-portfolio-heading">
        <div className="container">
          <FadeUp>
            <span className="va-section-label">Our Work</span>
            <h2 id="va-portfolio-heading" className="va-section-title">Recent Projects</h2>
            <p className="va-section-subtitle">A selection of custom LED signage installations across North Carolina and beyond.</p>
          </FadeUp>

          <StaggerWrap className="va-portfolio-masonry">
            {portfolio.map((item, i) => (
              <StaggerChild key={item.title} className={`va-portfolio-item ${i === 0 || i === 3 ? 'va-portfolio-item--tall' : ''}`}>
                <div className="va-portfolio-item__img">
                  <div className="va-portfolio-placeholder">
                    <HiLightBulb />
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="va-portfolio-item__overlay">
                  <span className="va-portfolio-item__category">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="va-section va-section--alt" id="testimonials" aria-labelledby="va-testimonials-heading">
        <div className="container">
          <FadeUp>
            <span className="va-section-label">Client Stories</span>
            <h2 id="va-testimonials-heading" className="va-section-title">What Our Clients Say</h2>
          </FadeUp>

          <StaggerWrap className="va-testimonials-grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="va-testimonial-card">
                <div className="va-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <HiStar key={i} />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="va-testimonial-card__author">
                  <div className="va-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
                <span className="va-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="va-testimonials-cta">
            <a href="#contact" className="va-btn va-btn--primary va-btn--glow">
              Ready to Get Started? <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section className="va-section va-contact-section" id="contact" aria-labelledby="va-contact-heading">
        <div className="container">
          <div className="va-contact-layout">
            <FadeUp className="va-contact-info">
              <span className="va-section-label">Get In Touch</span>
              <h2 id="va-contact-heading" className="va-section-title">Ready to Illuminate Your Brand?</h2>
              <p className="va-section-subtitle">Get a same-day quote for your custom LED signage project. No obligation — just expert guidance.</p>

              <div className="va-contact-details">
                <a href={COMPANY.phoneTel} className="va-contact-detail">
                  <HiPhone /> {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="va-contact-detail">
                  <HiMail /> {COMPANY.email}
                </a>
                <div className="va-contact-detail">
                  <HiLocationMarker /> {COMPANY.address.full}
                </div>
                <div className="va-contact-detail">
                  <HiClock /> Mon–Fri 8:00 AM – 6:00 PM
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="va-contact-form-wrap">
              <QuoteForm source="variant-a" />
              <p className="va-tcpa-text">
                By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {lightboxImg && <Lightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />}
    </>
  );
}
