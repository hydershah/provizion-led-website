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
import './VariantL.css';

/* ──── animation helpers ──── */
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

/* ──── data ──── */
const SERVICES = [
  {
    icon: <HiLightBulb />,
    title: 'LED Channel Letters',
    desc: 'Individually illuminated letterforms with precision-cut aluminum returns and high-output LED modules for maximum storefront visibility.',
    specs: ['Energy A+', '50,000hr LEDs', '5yr Warranty'],
  },
  {
    icon: <HiCurrencyDollar />,
    title: 'Monument Signs',
    desc: 'Architecturally integrated ground-level monuments that establish property identity with illuminated panels and durable construction.',
    specs: ['Custom Heights', 'Permit-Ready', 'Weather-Rated'],
  },
  {
    icon: <HiShieldCheck />,
    title: 'Pylon & Pole Signs',
    desc: 'Engineered high-rise pylon structures designed for highway visibility with multi-tenant panels and programmable LED cabinets.',
    specs: ['500ft Visibility', 'Wind-Rated', 'Multi-Tenant'],
  },
  {
    icon: <HiUserGroup />,
    title: 'Digital Displays',
    desc: 'Full-color electronic message centers with remote content management, scheduling, and real-time promotional updates.',
    specs: ['Full HD', 'Remote CMS', 'Auto-Brightness'],
  },
  {
    icon: <HiTruck />,
    title: 'Wayfinding Systems',
    desc: 'Coordinated directional signage packages that guide visitors through campuses, facilities, and multi-building complexes.',
    specs: ['ADA Compliant', 'Modular', 'Branded'],
  },
  {
    icon: <HiThumbUp />,
    title: 'Cabinet & Box Signs',
    desc: 'Internally illuminated cabinet signs with flex-face or polycarbonate panels, built for consistent glow and all-weather durability.',
    specs: ['Even Illumination', 'Low Maintenance', 'UL Listed'],
  },
];

const PROCESS = [
  { num: '01', title: 'Consultation', desc: 'Site evaluation, brand review, and project scoping to define the ideal signage solution.' },
  { num: '02', title: 'Design', desc: 'Custom mockups with 3D renderings, material specs, and full permit-ready documentation.' },
  { num: '03', title: 'Fabrication', desc: 'In-house precision manufacturing with CNC routing, LED assembly, and quality checkpoints.' },
  { num: '04', title: 'Installation', desc: 'Certified crew deployment with structural engineering, electrical hookup, and final inspection.' },
];

const B2B_PERKS = [
  'Volume pricing for 3+ location rollouts',
  'Dedicated account manager for every program',
  'Nationwide installation network coverage',
  'Brand consistency audits and style guides',
  'Priority scheduling on urgent turnarounds',
];

const WHY_US = [
  { icon: <HiClock />, title: 'Fast Turnaround', desc: 'Most projects completed in 4-6 weeks from design approval to final installation.' },
  { icon: <HiShieldCheck />, title: '5-Year Warranty', desc: 'Comprehensive coverage on all materials, LED modules, and installation workmanship.' },
  { icon: <HiThumbUp />, title: '62+ 5-Star Reviews', desc: 'Trusted by businesses across the Carolinas with a perfect satisfaction rating.' },
  { icon: <HiCurrencyDollar />, title: 'Transparent Pricing', desc: 'Detailed, itemized quotes with no hidden fees. What we quote is what you pay.' },
  { icon: <HiLightBulb />, title: 'Energy Efficient', desc: 'LED technology that reduces energy consumption up to 70% compared to traditional signage.' },
  { icon: <HiUserGroup />, title: 'Local & Responsive', desc: 'Charlotte-based team with direct phone access and same-week site visits.' },
];

const PORTFOLIO = [
  { title: 'Meridian Medical Campus', type: 'LED Monument Sign', visual: '🏥', variant: 'blue', tag: 'Healthcare' },
  { title: 'Apex Auto Group', type: 'LED Channel Letters', visual: '🚗', variant: 'gray', tag: 'Retail' },
  { title: 'Parkside Corporate Center', type: 'Wayfinding System', visual: '🏢', variant: 'blue', tag: 'Corporate' },
  { title: 'Harbor Brewing Co.', type: 'Illuminated Cabinet', visual: '🍺', variant: 'gray', tag: 'Hospitality' },
  { title: 'Summit Community Church', type: 'Digital Display', visual: '⛪', variant: 'blue', tag: 'Community' },
  { title: 'QuickServe Drive-Thru', type: 'Pylon Sign', visual: '🍔', variant: 'gray', tag: 'Restaurant' },
];

const TESTIMONIALS = [
  {
    text: 'We couldn\'t be happier with our new ProVizion LED sign! The image quality is incredible and the installation team was on point. They paid attention to every little detail and made sure we were completely satisfied. Great warranty and even better service!',
    author: 'Kamel Lamraoui',
    role: 'Google Review',
  },
  {
    text: 'If you want high-quality digital signage, go with ProVizion LED. The process was easy, communication was great, and their installers were some of the best I\'ve ever worked with. The attention to detail and excellent warranty make them stand out above the rest!',
    author: 'JNK Productionz',
    role: 'Google Review',
  },
  {
    text: 'Fantastic experience! ProVizion LED delivers premium digital signs that perform flawlessly. Great company to work with and excellent collaboration with locals.',
    author: 'Tory Thorpe',
    role: 'Google Review',
  },
];

/* ──── Component ──── */
export default function VariantL() {
  useThemeClass('theme-vl');

  return (
    <div className="vl-page">
      <SEO
        title={`Sign Showroom | ${COMPANY.name}`}
        description="Browse our complete LED sign collection. Channel letters, monument signs, digital displays, and more — designed, fabricated, and installed by Charlotte's trusted sign experts."
        keywords="LED signs Charlotte, sign showroom, business signs NC, channel letters, monument signs, digital displays, ProVizion LED"
        path="/variant-l"
      />

      {/* ═══ HERO ═══ */}
      <section className="vl-hero">
        <div className="vl-hero__inner">
          <FadeUp className="vl-hero__content">
            <div className="vl-hero__badge-row">
              <span className="vl-hero__badge">6 Sign Categories</span>
              <span className="vl-hero__badge-sep">&bull;</span>
              <span className="vl-hero__badge">500+ Installed</span>
              <span className="vl-hero__badge-sep">&bull;</span>
              <span className="vl-hero__badge">{COMPANY.rating}.0 Rated</span>
            </div>
            <h1 className="vl-hero__title">
              The Complete<br />Sign Collection
            </h1>
            <p className="vl-hero__sub">
              Browse our full catalog of LED signage solutions — each engineered for
              maximum visibility, energy efficiency, and lasting durability.
            </p>
            <div className="vl-hero__actions">
              <a href="#vl-contact" className="vl-btn vl-btn--blue">
                Get a Free Quote <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vl-btn vl-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="vl-hero__stats-card">
            <div className="vl-hero__stats-row">
              <div className="vl-hero__stat">
                <div className="vl-hero__stat-value">500+</div>
                <div className="vl-hero__stat-label">Signs Installed</div>
              </div>
              <div className="vl-hero__stat">
                <div className="vl-hero__stat-value">{COMPANY.reviewCount}+</div>
                <div className="vl-hero__stat-label">5-Star Reviews</div>
              </div>
              <div className="vl-hero__stat">
                <div className="vl-hero__stat-value">6</div>
                <div className="vl-hero__stat-label">Product Lines</div>
              </div>
            </div>
            <div className="vl-hero__trust-row">
              <span className="vl-hero__trust-badge"><HiShieldCheck /> Licensed &amp; Insured</span>
              <span className="vl-hero__trust-badge"><HiCheckCircle /> 5-Year Warranty</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vl-section">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Product Catalog</span>
            <h2 className="vl-heading">Sign Categories</h2>
            <p className="vl-subtitle">
              Six product lines engineered for every business need. Select a category to explore specifications.
            </p>
          </FadeUp>
          <StaggerWrap className="vl-services__grid">
            {SERVICES.map((s, i) => (
              <StaggerChild key={i} className="vl-service-card">
                <div className="vl-service-card__icon">{s.icon}</div>
                <h3 className="vl-service-card__title">{s.title}</h3>
                <p className="vl-service-card__desc">{s.desc}</p>
                <div className="vl-service-card__specs">
                  {s.specs.map((spec) => (
                    <span key={spec} className="vl-spec-badge">{spec}</span>
                  ))}
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vl-section vl-section--light">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Our Process</span>
            <h2 className="vl-heading">From Concept to Installation</h2>
            <p className="vl-subtitle">
              A streamlined four-step pipeline that takes your project from initial consultation to completed installation.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="vl-process__track">
              <div className="vl-process__line" />
              {PROCESS.map((step, i) => (
                <div key={i} className="vl-process-step">
                  <div className="vl-process-step__num">{step.num}</div>
                  <h4 className="vl-process-step__title">{step.title}</h4>
                  <p className="vl-process-step__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vl-section vl-section--dark">
        <div className="vl-container">
          <div className="vl-b2b__inner">
            <FadeUp className="vl-b2b__text">
              <span className="vl-kicker vl-kicker--light">Enterprise Program</span>
              <h2 className="vl-heading">Multi-Location Signage</h2>
              <p className="vl-b2b__desc">
                Franchise groups, property managers, and multi-site operators trust ProVizion
                to deliver consistent, brand-compliant signage at scale.
              </p>
              <div className="vl-b2b__list">
                {B2B_PERKS.map((perk, i) => (
                  <div key={i} className="vl-b2b__list-item">
                    <HiCheckCircle /> {perk}
                  </div>
                ))}
              </div>
              <a href="#vl-contact" className="vl-btn vl-btn--blue">
                Request B2B Pricing <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vl-b2b__card">
              <div className="vl-b2b__card-icon"><HiShieldCheck /></div>
              <h3>Trusted Partner</h3>
              <p>50+ businesses rely on ProVizion for multi-location signage programs across the Carolinas.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vl-section">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Why ProVizion</span>
            <h2 className="vl-heading">The ProVizion Advantage</h2>
            <p className="vl-subtitle">
              Six reasons businesses across the Carolinas choose us for their signage needs.
            </p>
          </FadeUp>
          <StaggerWrap className="vl-why__grid">
            {WHY_US.map((item, i) => (
              <StaggerChild key={i} className="vl-why-card">
                <div className="vl-why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vl-section vl-section--light">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Product Gallery</span>
            <h2 className="vl-heading">Featured Installations</h2>
            <p className="vl-subtitle">
              A curated selection of recent sign projects across industries.
            </p>
          </FadeUp>
          <StaggerWrap className="vl-portfolio__grid">
            {PORTFOLIO.map((p, i) => (
              <StaggerChild key={i} className="vl-portfolio-card">
                <div className={`vl-portfolio-card__visual vl-portfolio-card__visual--${p.variant}`}>
                  <span className="vl-portfolio-card__emoji">{p.visual}</span>
                  <span className="vl-portfolio-card__tag">{p.tag}</span>
                </div>
                <div className="vl-portfolio-card__body">
                  <h3>{p.title}</h3>
                  <span className="vl-portfolio-card__type">{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vl-section">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Client Reviews</span>
            <h2 className="vl-heading">What Our Clients Say</h2>
            <p className="vl-subtitle">
              {COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.
            </p>
          </FadeUp>
          <StaggerWrap className="vl-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <StaggerChild key={i} className="vl-testimonial-card">
                <div className="vl-testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <HiStar key={j} />)}
                </div>
                <p className="vl-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <p className="vl-testimonial-card__author">{t.author}</p>
                <p className="vl-testimonial-card__role">{t.role}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="vl-contact" className="vl-section vl-section--light">
        <div className="vl-container">
          <FadeUp>
            <span className="vl-kicker">Contact Us</span>
            <h2 className="vl-heading">Request a Free Consultation</h2>
            <p className="vl-subtitle">
              Fill out the form below and a signage specialist will follow up within 24 hours.
            </p>
          </FadeUp>
          <div className="vl-contact__inner">
            <FadeUp className="vl-contact__info">
              <div className="vl-contact__info-item">
                <div className="vl-contact__info-icon"><HiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vl-contact__info-item">
                <div className="vl-contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vl-contact__info-item">
                <div className="vl-contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Location</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="vl-contact__info-item">
                <div className="vl-contact__info-icon"><HiClock /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vl-contact__form-wrap">
              <QuoteForm source="variant-l" />
              <p className="vl-contact__tcpa">
                By submitting this form, you agree to receive calls/texts from {COMPANY.name}.
                Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
