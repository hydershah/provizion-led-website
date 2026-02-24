import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  HiAcademicCap,
  HiGlobe,
  HiBadgeCheck,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantC.css';

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

/* ── Animated Gold Line ── */
function GoldLine() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      className="vc-gold-line"
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

/* ── Star Rating with sequential fill ── */
function AnimatedStars({ count = 5 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="vc-star-row">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.15, duration: 0.3 }}
        >
          <HiStar />
        </motion.span>
      ))}
    </div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Custom-designed to maximize visibility and brand impact day and night.', img: null },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Update messaging remotely with vibrant, high-resolution screens.', img: null },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage that combines artistry with engineering. Channel letters, cabinet signs, and more.', img: null },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage that establishes a commanding presence for entrances and high-visibility locations.', img: null },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Perfect for promotions, events, and community updates.', img: null },
  { title: 'Electronic Message Centers', desc: 'Sophisticated electronic displays with full-color capabilities. Enterprise-grade digital signage for maximum audience engagement.', img: null },
];

const processSteps = [
  { step: '01', title: 'Design', desc: 'Collaborative design process tailored to your brand. Detailed renderings and engineering specs.', icon: <HiLightBulb /> },
  { step: '02', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC, LED modules, and quality control.', icon: <HiCube /> },
  { step: '03', title: 'Installation', desc: 'Expert certified crews. Permits, structural engineering, electrical handled.', icon: <HiTruck /> },
  { step: '04', title: 'Maintenance', desc: 'Ongoing support, preventative maintenance, LED replacement, diagnostics.', icon: <HiCog /> },
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
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of the illumination is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
];

const b2bFeatures = [
  { title: 'Wholesale & Contract Installation', desc: 'Partner with us for bulk manufacturing and certified installation services across the region.' },
  { title: 'White-Label Services', desc: 'We manufacture under your brand with full confidentiality and custom specifications.' },
  { title: 'Trade & Reseller Solutions', desc: 'Special pricing and priority scheduling for sign industry professionals.' },
];

const certifications = [
  'BBB Accredited',
  'Licensed & Insured',
  'UL Listed',
  'Energy Star Partner',
];

const portfolio = [
  { title: 'Channel Letters — Luxury Hotel', category: 'Channel Letters' },
  { title: 'LED Monument — Financial District', category: 'Monument Signs' },
  { title: 'Digital Display — Convention Center', category: 'Digital Displays' },
  { title: 'Illuminated Cabinet — Fine Dining', category: 'Cabinet Signs' },
  { title: 'EMC — Corporate Headquarters', category: 'Message Centers' },
  { title: 'Pylon Sign — Medical Campus', category: 'Pylon Signs' },
];

/* ====================================
   VARIATION C: EXECUTIVE PREMIUM
   ==================================== */
export default function VariantC() {
  useThemeClass('theme-vc');

  return (
    <>
      <SEO
        title="Executive Premium | Design Variant C"
        description="Premium LED sign manufacturer offering design, fabrication & installation. Same-day quotes available. Serving North Carolina businesses."
        keywords="LED signs, custom signage, sign manufacturer, Charlotte NC, LED installation, enterprise signage"
        path="/variant-c"
      />

      {/* ── HERO (Split Screen) ── */}
      <section className="vc-hero" id="hero">
        <div className="vc-hero__content-side">
          <div className="vc-hero__content-inner">
            <FadeUp>
              <div className="vc-hero__trust-row">
                <AnimatedStars count={5} />
                <span className="vc-hero__review-count">{COMPANY.reviewCount} Reviews</span>
                <span className="vc-hero__badge"><HiShieldCheck /> BBB Accredited</span>
                <span className="vc-hero__badge"><HiShieldCheck /> Licensed &amp; Insured</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="vc-hero__heading">
                Custom LED Signage Solutions
              </h1>
              <GoldLine />
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="vc-hero__subhead">
                Full-service LED sign manufacturer delivering bespoke signage from concept design to expert installation and ongoing maintenance. Trusted by businesses across North Carolina for over a decade.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="vc-hero__actions">
                <a href="#contact" className="vc-btn vc-btn--gold">
                  Request a Consultation <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="vc-hero__micro">Quick &amp; Same-Day Quotes · No Obligation</p>
            </FadeUp>
          </div>
        </div>

        <div className="vc-hero__visual-side">
          <div className="vc-hero__visual-inner">
            <div className="vc-hero__visual-placeholder">
              <div className="vc-hero__visual-gradient" />
              <div className="vc-hero__visual-text">
                <HiLightBulb />
                <span>Sign Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES (Editorial Grid) ── */}
      <section className="vc-section" id="services" aria-labelledby="vc-services-heading">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Our Expertise</span>
            <h2 id="vc-services-heading" className="vc-section-title">Signage Solutions</h2>
            <p className="vc-section-subtitle">Six categories of premium LED signage, each crafted with meticulous attention to detail and engineered for lasting performance.</p>
          </FadeUp>

          <div className="vc-services-editorial">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.08} className={`vc-service-editorial ${i % 2 === 0 ? '' : 'vc-service-editorial--alt'}`}>
                <div className="vc-service-editorial__img">
                  <div className="vc-service-placeholder">
                    <HiLightBulb />
                  </div>
                </div>
                <div className="vc-service-editorial__content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link to="/contact-us" className="vc-service-editorial__link">
                    Read More <HiArrowRight className="vc-arrow-extend" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="vc-services-cta">
            <a href="#contact" className="vc-btn vc-btn--gold">
              Get Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="vc-section vc-section--alt" id="process" aria-labelledby="vc-process-heading">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">The Journey</span>
            <h2 id="vc-process-heading" className="vc-section-title">Our Process</h2>
            <p className="vc-section-subtitle">A refined four-step approach ensuring excellence at every stage — all proudly in-house.</p>
          </FadeUp>

          <StaggerWrap className="vc-process-grid">
            {processSteps.map((step) => (
              <StaggerChild key={step.step} className="vc-process-card">
                <div className="vc-process-card__number">{step.step}</div>
                <div className="vc-process-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── B2B SECTION ── */}
      <section className="vc-section" id="b2b" aria-labelledby="vc-b2b-heading">
        <div className="vc-container">
          <div className="vc-b2b-layout">
            <FadeUp className="vc-b2b-content">
              <span className="vc-section-label">Enterprise Partnership</span>
              <h2 id="vc-b2b-heading" className="vc-section-title">Contractor &amp; Reseller Solutions</h2>
              <p className="vc-section-subtitle">Partner with North Carolina&apos;s premier sign manufacturer. Dedicated account management, wholesale pricing, and priority installation scheduling.</p>

              <div className="vc-b2b-features">
                {b2bFeatures.map((feat) => (
                  <div key={feat.title} className="vc-b2b-feature">
                    <HiCheckCircle className="vc-b2b-feature__icon" />
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vc-b2b-certifications">
                {certifications.map((cert) => (
                  <span key={cert} className="vc-cert-badge"><HiBadgeCheck /> {cert}</span>
                ))}
              </div>

              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--gold">
                <HiPhone /> Call {COMPANY.phone}
              </a>
            </FadeUp>

            <FadeUp delay={0.15} className="vc-b2b-quote">
              <blockquote>
                &ldquo;ProVizion LED has been our go-to manufacturing partner for three years. Their consistency, quality, and reliability are unmatched in the Southeast region.&rdquo;
              </blockquote>
              <div className="vc-b2b-quote__author">
                <div className="vc-b2b-quote__avatar">R</div>
                <div>
                  <strong>Regional Director</strong>
                  <span>National Sign Company</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="vc-section vc-section--alt" id="why-us" aria-labelledby="vc-why-heading">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">The ProVizion Difference</span>
            <h2 id="vc-why-heading" className="vc-section-title">Why Choose Us</h2>
          </FadeUp>

          <StaggerWrap className="vc-why-grid">
            {whyChoose.map((item, i) => (
              <StaggerChild key={item.title} className="vc-why-card">
                <div className="vc-why-card__number">{String(i + 1).padStart(2, '0')}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="vc-section" id="portfolio" aria-labelledby="vc-portfolio-heading">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Selected Work</span>
            <h2 id="vc-portfolio-heading" className="vc-section-title">Project Gallery</h2>
            <p className="vc-section-subtitle">A curated selection of custom LED signage installations for discerning clients.</p>
          </FadeUp>

          <StaggerWrap className="vc-portfolio-grid">
            {portfolio.map((item, i) => (
              <StaggerChild key={item.title} className={`vc-portfolio-item ${i === 0 ? 'vc-portfolio-item--large' : ''}`}>
                <div className="vc-portfolio-item__bg">
                  <HiLightBulb />
                  <span>{item.category}</span>
                </div>
                <div className="vc-portfolio-item__overlay">
                  <span className="vc-portfolio-item__tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="vc-section vc-section--alt" id="testimonials" aria-labelledby="vc-test-heading">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Client Testimonials</span>
            <h2 id="vc-test-heading" className="vc-section-title">Trusted by Industry Leaders</h2>
          </FadeUp>

          <StaggerWrap className="vc-testimonials-grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vc-testimonial-card">
                <div className="vc-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <HiStar key={i} />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="vc-testimonial-card__author">
                  <div className="vc-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
                <span className="vc-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vc-testimonials-cta">
            <a href="#contact" className="vc-btn vc-btn--gold">
              Start Your Project <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="vc-section vc-contact-section" id="contact" aria-labelledby="vc-contact-heading">
        <div className="vc-container">
          <div className="vc-contact-layout">
            <FadeUp className="vc-contact-form-side">
              <span className="vc-section-label">Request a Quote</span>
              <h2 id="vc-contact-heading" className="vc-section-title">Ready to Illuminate Your Brand?</h2>
              <p className="vc-section-subtitle">Complete the form below for a complimentary consultation and same-day quote.</p>

              <QuoteForm source="variant-c" />
              <p className="vc-tcpa-text">
                By providing my phone number to {COMPANY.name}, I agree and acknowledge that {COMPANY.name} may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="vc-contact-map-side">
              <div className="vc-map-placeholder">
                <HiLocationMarker className="vc-map-pin" />
                <h4>{COMPANY.name}</h4>
                <p>{COMPANY.address.full}</p>
              </div>

              <div className="vc-contact-details">
                <a href={COMPANY.phoneTel} className="vc-contact-detail">
                  <HiPhone /> {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="vc-contact-detail">
                  <HiMail /> {COMPANY.email}
                </a>
                <div className="vc-contact-detail">
                  <HiClock /> Mon–Fri 8:00 AM – 6:00 PM
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </>
  );
}
