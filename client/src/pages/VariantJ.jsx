/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
import './VariantJ.css';

/* ──── Animation Helpers ──── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

const StaggerWrap = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
      {children}
    </motion.div>
  );
};

const StaggerChild = ({ children, className = '' }) => (
  <motion.div className={className} variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
    {children}
  </motion.div>
);

/* ──── Data ──── */
const SERVICES = [
  { title: 'LED Signs', desc: 'High-performance LED signage engineered for maximum visibility. Advanced thermal management ensures years of reliable operation.', icon: <HiLightBulb /> },
  { title: 'Digital Displays', desc: 'Dynamic digital screens with remote content management. Update messaging in real time across single or multiple locations.', icon: <HiCurrencyDollar /> },
  { title: 'Channel Letters', desc: 'Custom-fabricated illuminated channel letters. Front-lit, back-lit, or halo-lit options for distinctive brand identity.', icon: <HiShieldCheck /> },
  { title: 'Monument Signs', desc: 'Architectural monument signage for entrances and campuses. Built to code with integrated LED illumination.', icon: <HiTruck /> },
  { title: 'Message Centers', desc: 'Programmable electronic message centers for promotions, events, and real-time communication with your audience.', icon: <HiUserGroup /> },
  { title: 'Wayfinding Systems', desc: 'Comprehensive directional signage for campuses, medical centers, and commercial complexes. ADA-compliant designs.', icon: <HiArrowRight /> },
];

const PROCESS = [
  { step: '01', title: 'Consultation', desc: 'We assess your site, zoning requirements, and brand goals to define the ideal signage solution.' },
  { step: '02', title: 'Design', desc: '3D renderings and engineering specs for your review. Iterate until the design is exactly right.' },
  { step: '03', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC cutting, welding, and quality-controlled assembly.' },
  { step: '04', title: 'Installation', desc: 'Certified crew handles permits, electrical, and installation. Turnkey from start to finish.' },
];

const B2B_PERKS = [
  'Dedicated account manager for every project',
  'Volume pricing for multi-location rollouts',
  'Centralized design standards and brand compliance',
  'Nationwide installation coordination',
  'Priority maintenance and support contracts',
];

const WHY_US = [
  { title: 'Expert Fabrication', desc: 'In-house manufacturing with 15+ years of LED signage expertise.', icon: <HiShieldCheck /> },
  { title: 'Turnkey Service', desc: 'Design, permits, fabrication, and installation — one point of contact.', icon: <HiCheckCircle /> },
  { title: 'Energy Efficient', desc: 'LED technology that cuts power costs up to 70% vs traditional signage.', icon: <HiLightBulb /> },
  { title: 'Fast Turnaround', desc: 'Streamlined production means your sign is ready weeks ahead of schedule.', icon: <HiClock /> },
  { title: 'Local Expertise', desc: 'Deep knowledge of Charlotte zoning, permits, and installation codes.', icon: <HiLocationMarker /> },
  { title: 'Proven Results', desc: `${COMPANY.reviewCount}+ five-star reviews from businesses across North Carolina.`, icon: <HiThumbUp /> },
];

const PORTFOLIO = [
  { title: 'Ballantyne Corporate Tower', type: 'Monument Sign', visual: '\u{1F3E2}', variant: 'teal' },
  { title: 'SouthEnd Medical Campus', type: 'Wayfinding System', visual: '\u{1F3E5}', variant: 'navy' },
  { title: 'NoDa Brewery District', type: 'Channel Letters', visual: '\u{1F3AA}', variant: 'teal' },
  { title: 'Uptown Financial Plaza', type: 'Digital Display', visual: '\u{1F4CA}', variant: 'navy' },
  { title: 'Charlotte Gateway Center', type: 'LED Message Center', visual: '\u{2728}', variant: 'teal' },
  { title: 'University Research Park', type: 'Campus Signage', visual: '\u{1F393}', variant: 'navy' },
];

const TESTIMONIALS = [
  { text: 'ProVizion LED delivered a stunning monument sign for our corporate campus. The design process was thorough, permitting was handled seamlessly, and the final product exceeded our expectations. Highly recommended for any commercial project.', author: 'Jennifer Morrison', role: 'VP Facilities, Meridian Properties' },
  { text: 'We rolled out digital displays across four locations with ProVizion. Their project management kept everything on schedule and on budget. The remote content management system is a game-changer for our marketing team.', author: 'Marcus Webb', role: 'Director of Operations, Pinnacle Retail Group' },
  { text: 'From initial consultation to final installation, the team was professional and responsive. Our channel letters are the best-looking signage on the block, and we get compliments from clients weekly.', author: 'Dr. Lisa Patel', role: 'Owner, Lakeside Dental Partners' },
];

/* ──── Component ──── */
export default function VariantJ() {
  useThemeClass('theme-vj');

  return (
    <div className="vj-page">
      <SEO
        title="Glass Luxe | ProVizion LED"
        description="Premium LED signage solutions for property managers and corporate buyers. Custom LED signs, digital displays, and monument signs in Charlotte, NC."
        keywords="LED signs, corporate signage, Charlotte NC, property management signs, monument signs"
        path="/variant-j"
      />

      {/* ═══ HERO ═══ */}
      <section className="vj-hero">
        <div className="vj-hero__container">
          <div className="vj-hero__content">
            <FadeUp>
              <span className="vj-hero__kicker">Charlotte&#39;s Premier LED Signage Partner</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="vj-hero__title">
                Signage That Elevates<br />
                <span className="vj-hero__title-accent">Your Property</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="vj-hero__sub">
                Custom-engineered LED signs built for visibility, durability, and brand impact.
                Trusted by property managers and corporate buyers across North Carolina.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="vj-hero__actions">
                <a href="#vj-contact" className="vj-btn vj-btn--teal">
                  Request a Proposal <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vj-btn vj-btn--glass">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="vj-hero__glass-card">
            <div className="vj-hero__trust-badges">
              <div className="vj-hero__badge">
                <div className="vj-hero__badge-value">{COMPANY.rating}.0</div>
                <div className="vj-hero__badge-stars">
                  {Array.from({ length: 5 }, (_, i) => <HiStar key={i} />)}
                </div>
                <div className="vj-hero__badge-label">{COMPANY.reviewCount}+ Reviews</div>
              </div>
              <div className="vj-hero__badge-divider" />
              <div className="vj-hero__badge">
                <div className="vj-hero__badge-value">500+</div>
                <div className="vj-hero__badge-label">Signs Installed</div>
              </div>
              <div className="vj-hero__badge-divider" />
              <div className="vj-hero__badge">
                <div className="vj-hero__badge-value">15+</div>
                <div className="vj-hero__badge-label">Years Experience</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vj-section" id="vj-services">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Our Services</span>
            <h2 className="vj-heading">Comprehensive Signage Solutions</h2>
            <p className="vj-subtitle">From design through installation, we deliver LED signage that performs.</p>
          </FadeUp>
          <StaggerWrap className="vj-services__grid">
            {SERVICES.map((s) => (
              <StaggerChild key={s.title} className="vj-glass-card vj-service-card">
                <div className="vj-service-card__icon">{s.icon}</div>
                <h3 className="vj-service-card__title">{s.title}</h3>
                <p className="vj-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vj-section vj-section--light" id="vj-process">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Our Process</span>
            <h2 className="vj-heading">Four Steps to Your Sign</h2>
            <p className="vj-subtitle">A structured approach that keeps your project on time and on budget.</p>
          </FadeUp>
          <StaggerWrap className="vj-process__grid">
            {PROCESS.map((p, i) => (
              <StaggerChild key={p.step} className="vj-process-card">
                <div className="vj-glass-card vj-process-card__inner">
                  <div className="vj-process-card__step">{p.step}</div>
                  <h4 className="vj-process-card__title">{p.title}</h4>
                  <p className="vj-process-card__desc">{p.desc}</p>
                </div>
                {i < PROCESS.length - 1 && <div className="vj-process-card__connector" />}
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B / ENTERPRISE ═══ */}
      <section className="vj-section vj-section--navy" id="vj-enterprise">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker vj-kicker--light">Enterprise Solutions</span>
            <h2 className="vj-heading vj-heading--light">Multi-Location Signage Programs</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="vj-glass-card vj-glass-card--navy vj-b2b__card">
              <div className="vj-b2b__content">
                <p className="vj-b2b__intro">
                  ProVizion LED partners with property management companies, franchise groups, and
                  multi-location businesses to deliver consistent, high-quality signage at scale.
                </p>
                <ul className="vj-b2b__list">
                  {B2B_PERKS.map((perk) => (
                    <li key={perk} className="vj-b2b__list-item">
                      <HiCheckCircle className="vj-b2b__check" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a href="#vj-contact" className="vj-btn vj-btn--teal">
                  Discuss Your Program <HiArrowRight />
                </a>
              </div>
              <div className="vj-b2b__visual">
                <div className="vj-b2b__visual-icon"><HiShieldCheck /></div>
                <div className="vj-b2b__visual-title">Trusted Partner</div>
                <div className="vj-b2b__visual-sub">Serving businesses across NC since 2009</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vj-section" id="vj-why">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Why ProVizion</span>
            <h2 className="vj-heading">The ProVizion Advantage</h2>
            <p className="vj-subtitle">What sets us apart from every other sign company.</p>
          </FadeUp>
          <StaggerWrap className="vj-why__grid">
            {WHY_US.map((w) => (
              <StaggerChild key={w.title} className="vj-glass-card vj-why-card">
                <div className="vj-why-card__icon">{w.icon}</div>
                <h3 className="vj-why-card__title">{w.title}</h3>
                <p className="vj-why-card__desc">{w.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vj-section vj-section--light" id="vj-portfolio">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Portfolio</span>
            <h2 className="vj-heading">Featured Projects</h2>
            <p className="vj-subtitle">Recent installations across the Charlotte metro area.</p>
          </FadeUp>
          <StaggerWrap className="vj-portfolio__grid">
            {PORTFOLIO.map((p) => (
              <StaggerChild key={p.title} className="vj-portfolio-card">
                <div className={`vj-portfolio-card__visual vj-portfolio-card__visual--${p.variant}`}>
                  <span className="vj-portfolio-card__emoji">{p.visual}</span>
                </div>
                <div className="vj-portfolio-card__overlay">
                  <h3 className="vj-portfolio-card__title">{p.title}</h3>
                  <span className="vj-portfolio-card__type">{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vj-section" id="vj-testimonials">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Client Testimonials</span>
            <h2 className="vj-heading">What Our Clients Say</h2>
            <p className="vj-subtitle">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.</p>
          </FadeUp>
          <StaggerWrap className="vj-testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <StaggerChild key={t.author} className="vj-glass-card vj-testimonial-card">
                <div className="vj-testimonial-card__stars">
                  {Array.from({ length: 5 }, (_, i) => <HiStar key={i} />)}
                </div>
                <p className="vj-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="vj-testimonial-card__author">{t.author}</div>
                <div className="vj-testimonial-card__role">{t.role}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="vj-section" id="vj-contact">
        <div className="vj-container">
          <FadeUp>
            <span className="vj-kicker">Get In Touch</span>
            <h2 className="vj-heading">Start Your Project</h2>
            <p className="vj-subtitle">Tell us about your signage needs. No obligation, no pressure.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="vj-contact__inner">
              <div className="vj-contact__info">
                <div className="vj-glass-card vj-contact__info-card">
                  <div className="vj-contact__info-item">
                    <HiPhone className="vj-contact__info-icon" />
                    <div>
                      <h4>Phone</h4>
                      <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                    </div>
                  </div>
                  <div className="vj-contact__info-item">
                    <HiMail className="vj-contact__info-icon" />
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                    </div>
                  </div>
                  <div className="vj-contact__info-item">
                    <HiLocationMarker className="vj-contact__info-icon" />
                    <div>
                      <h4>Location</h4>
                      <p>{COMPANY.address.full}</p>
                    </div>
                  </div>
                  <div className="vj-contact__info-item">
                    <HiClock className="vj-contact__info-icon" />
                    <div>
                      <h4>Hours</h4>
                      <p>Mon &ndash; Fri: 8 AM &ndash; 6 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vj-contact__form-wrap">
                <div className="vj-glass-card vj-contact__form-card">
                  <QuoteForm source="variant-j" />
                  <p className="vj-contact__tcpa">
                    By submitting this form, you consent to receive marketing communications from ProVizion LED.
                    Message and data rates may apply. You can opt out at any time.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
