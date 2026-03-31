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
  HiCheckCircle,
  HiLocationMarker,
  HiMail,
  HiClock,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantG.css';

/* ──── Animation Helpers ──── */
function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: 'easeOut', delay }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerWrap({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerChild({ children, className = '' }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management. Maximum visibility, day and night.', icon: <HiLightBulb /> },
  { title: 'Digital Displays', desc: 'Cutting-edge digital displays for dynamic content. Remote updates with vibrant, high-res screens.', icon: <HiCube /> },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage. Channel letters, cabinet signs, and custom builds.', icon: <HiLightBulb /> },
  { title: 'Monument Signs', desc: 'Grand, landmark-style signage for entrances and high-visibility locations.', icon: <HiCube /> },
  { title: 'Message Boards', desc: 'Programmable messaging for real-time communication. Promotions, events, updates.', icon: <HiCog /> },
  { title: 'Electronic Centers', desc: 'Full-color enterprise-grade displays for maximum audience engagement.', icon: <HiCube /> },
];

const processSteps = [
  { num: '01', title: 'Design', desc: 'Collaborative design with 3D renderings and engineering specs.' },
  { num: '02', title: 'Fabricate', desc: 'In-house manufacturing with precision CNC and quality control.' },
  { num: '03', title: 'Install', desc: 'Certified crew installation with full permitting support.' },
  { num: '04', title: 'Maintain', desc: 'Ongoing preventative maintenance and remote diagnostics.' },
];

const whyChoose = [
  { title: 'Expert Craftsmanship', desc: 'Decades of combined experience in LED signage.' },
  { title: 'Custom Built', desc: 'Every sign tailored to your brand and location.' },
  { title: 'Latest Tech', desc: 'Cutting-edge LED modules and control systems.' },
  { title: 'Eco-Efficient', desc: 'Energy-efficient technology reducing power costs.' },
  { title: 'Full Service', desc: 'Design to maintenance — one point of contact.' },
  { title: 'NC Experts', desc: 'Deep local permitting and zoning knowledge.' },
];

const portfolio = [
  { title: 'Charlotte Gateway LED', type: 'Monument Sign', color: 'dark', icon: <HiLightBulb /> },
  { title: 'SouthEnd Digital Wall', type: 'Digital Display', color: 'red', icon: <HiCube /> },
  { title: 'Plaza Midwood Letters', type: 'Channel Letters', color: 'dark', icon: <HiLightBulb /> },
  { title: 'Ballantyne EMC Board', type: 'Message Center', color: 'red', icon: <HiCog /> },
  { title: 'Uptown Medical Sign', type: 'Wayfinding', color: 'dark', icon: <HiShieldCheck /> },
  { title: 'Northlake Auto Display', type: 'LED Board', color: 'red', icon: <HiCube /> },
];

const testimonials = [
  { name: 'Kamel Lamraoui', business: 'Google Review', rating: 5, text: 'We couldn\'t be happier with our new ProVizion LED sign! The image quality is incredible and the installation team was on point. They paid attention to every little detail and made sure we were completely satisfied. Great warranty and even better service!' },
  { name: 'JNK Productionz', business: 'Google Review', rating: 5, text: 'If you want high-quality digital signage, go with ProVizion LED. The process was easy, communication was great, and their installers were some of the best I\'ve ever worked with. The attention to detail and excellent warranty make them stand out above the rest!' },
  { name: 'Tory Thorpe', business: 'Google Review', rating: 5, text: 'Fantastic experience! ProVizion LED delivers premium digital signs that perform flawlessly. Great company to work with and excellent collaboration with locals.' },
];

/* ──── Component ──── */
export default function VariantG() {
  useThemeClass('theme-vg');

  return (
    <div className="vg-page">
      <SEO
        noindex
        title="Bold Contrast | ProVizion LED"
        description="High-impact, brutalist-inspired LED signage solutions from ProVizion LED. Custom LED signs, digital displays, and electronic message centers in Charlotte, NC."
        keywords="LED signs, digital signage, Charlotte NC, bold design, brutalist"
        path="/variant-g"
      />

      {/* ═══ HERO ═══ */}
      <section className="vg-hero">
        <div className="vg-hero__left">
          <FadeUp>
            <span className="vg-hero__tag">Charlotte&apos;s LED Signage Leader</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="vg-hero__title">
              Signs That<br /><span>Demand</span><br />Attention
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="vg-hero__sub">
              Custom-engineered LED signage that makes an impact. From bold monument
              signs to dynamic digital displays, ProVizion LED builds visibility that
              drives business.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="vg-hero__actions">
              <a href="#contact" className="vg-btn vg-btn--red">
                Get a Quote <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vg-btn vg-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="vg-hero__right">
          <FadeUp>
            <div className="vg-hero__right-num">500+</div>
            <div className="vg-hero__right-label">Signs Installed</div>
            <div className="vg-hero__right-stats">
              <div className="vg-hero__right-stat">
                <div className="vg-hero__right-stat-value">{COMPANY.reviewCount}+</div>
                <div className="vg-hero__right-stat-label">Reviews</div>
              </div>
              <div className="vg-hero__right-stat">
                <div className="vg-hero__right-stat-value">{COMPANY.rating}.0</div>
                <div className="vg-hero__right-stat-label">Rating</div>
              </div>
              <div className="vg-hero__right-stat">
                <div className="vg-hero__right-stat-value">24/7</div>
                <div className="vg-hero__right-stat-label">Support</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vg-section">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Services</span>
            <h2 className="vg-heading">What We Build</h2>
            <p className="vg-subtitle">Full-spectrum LED signage from concept through deployment.</p>
          </FadeUp>
          <StaggerWrap className="vg-services__grid">
            {services.map((s, i) => (
              <StaggerChild key={s.title} className="vg-service-card">
                <div className="vg-service-card__num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="vg-service-card__title">{s.title}</h3>
                <p className="vg-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vg-section vg-section--dark">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Process</span>
            <h2 className="vg-heading">How We Work</h2>
            <p className="vg-subtitle" style={{ color: 'var(--vg-gray)' }}>Four bold steps from concept to reality.</p>
          </FadeUp>
          <StaggerWrap className="vg-process__steps">
            {processSteps.map((s) => (
              <StaggerChild key={s.num} className="vg-process-step">
                <div className="vg-process-step__num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vg-section">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Enterprise</span>
            <h2 className="vg-heading">Multi-Location Programs</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="vg-b2b__inner">
              <div className="vg-b2b__text">
                <p>
                  ProVizion LED partners with franchises, property management groups, and
                  multi-location businesses to deliver consistent signage programs at scale.
                </p>
                <div className="vg-b2b__list">
                  <div className="vg-b2b__list-item"><HiCheckCircle /> Franchise-ready packages</div>
                  <div className="vg-b2b__list-item"><HiCheckCircle /> Dedicated account management</div>
                  <div className="vg-b2b__list-item"><HiCheckCircle /> Volume pricing tiers</div>
                  <div className="vg-b2b__list-item"><HiCheckCircle /> Nationwide coordination</div>
                </div>
                <a href="#contact" className="vg-btn vg-btn--black">
                  Partner With Us <HiArrowRight />
                </a>
              </div>
              <div className="vg-b2b__visual">
                <div className="vg-b2b__visual-icon"><HiShieldCheck /></div>
                <h3>Trusted Partner</h3>
                <p>Serving businesses across NC</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vg-section vg-section--dark">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Advantages</span>
            <h2 className="vg-heading">Why ProVizion</h2>
            <p className="vg-subtitle" style={{ color: 'var(--vg-gray)' }}>The edge that makes us different.</p>
          </FadeUp>
          <StaggerWrap className="vg-why__grid">
            {whyChoose.map((w, i) => (
              <StaggerChild key={w.title} className="vg-why-card">
                <span className="vg-why-card__idx">{String(i + 1).padStart(2, '0')}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vg-section">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Portfolio</span>
            <h2 className="vg-heading">Featured Work</h2>
            <p className="vg-subtitle">Recent installations that define our craft.</p>
          </FadeUp>
          <StaggerWrap className="vg-portfolio__grid">
            {portfolio.map((p) => (
              <StaggerChild key={p.title} className="vg-portfolio-card">
                <div className={`vg-portfolio-card__visual vg-portfolio-card__visual--${p.color}`}>
                  {p.icon}
                </div>
                <div className="vg-portfolio-card__body">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vg-section vg-section--light">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Reviews</span>
            <h2 className="vg-heading">Client Feedback</h2>
            <p className="vg-subtitle">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.</p>
          </FadeUp>
          <StaggerWrap className="vg-testimonials__grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vg-testimonial-card">
                <div className="vg-testimonial-card__stars">
                  {Array.from({ length: t.rating }, (_, i) => <HiStar key={i} />)}
                </div>
                <p className="vg-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="vg-testimonial-card__author">{t.name}</div>
                <div className="vg-testimonial-card__role">{t.business}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="vg-section" id="contact">
        <div className="vg-container">
          <FadeUp>
            <span className="vg-kicker">Contact</span>
            <h2 className="vg-heading">Start Your Project</h2>
            <p className="vg-subtitle">Tell us what you need. No fluff, just results.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="vg-contact__inner">
              <div className="vg-contact__info">
                <div className="vg-contact__info-item">
                  <HiPhone className="vg-contact__info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="vg-contact__info-item">
                  <HiMail className="vg-contact__info-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </div>
                </div>
                <div className="vg-contact__info-item">
                  <HiLocationMarker className="vg-contact__info-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>{COMPANY.address.full}</p>
                  </div>
                </div>
                <div className="vg-contact__info-item">
                  <HiClock className="vg-contact__info-icon" />
                  <div>
                    <h4>Hours</h4>
                    <p>Mon – Fri: 8 AM – 6 PM EST</p>
                  </div>
                </div>
              </div>
              <div className="vg-contact__form-wrap">
                <QuoteForm source="variant-g-bold-contrast" />
                <p className="vg-contact__tcpa">
                  By submitting this form, you consent to receive marketing communications from ProVizion LED.
                  Message and data rates may apply. You can opt out at any time.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
