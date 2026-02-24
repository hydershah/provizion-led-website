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
import './VariantF.css';

/* ──── Animation Helpers ──── */
function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut', delay }} className={className}>
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
    <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management. Custom-designed for maximum visibility.', icon: <HiLightBulb />, id: 'SVC-001' },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content. Update messaging remotely with high-resolution screens.', icon: <HiCube />, id: 'SVC-002' },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage combining artistry with engineering. Channel letters and cabinets.', icon: <HiLightBulb />, id: 'SVC-003' },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage establishing commanding presence. Custom-built for high-visibility.', icon: <HiCube />, id: 'SVC-004' },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging for real-time communication. Promotions, events, and community.', icon: <HiCog />, id: 'SVC-005' },
  { title: 'Electronic Message Centers', desc: 'Full-color enterprise-grade electronic displays for maximum audience engagement.', icon: <HiCube />, id: 'SVC-006' },
];

const processSteps = [
  { num: '01', title: 'Design', desc: 'Collaborative design with 3D renderings and engineering specifications before fabrication.', icon: <HiLightBulb /> },
  { num: '02', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC, LED modules, and quality-controlled assembly.', icon: <HiCube /> },
  { num: '03', title: 'Installation', desc: 'Certified crew installation with permits, structural engineering, and electrical connections.', icon: <HiTruck /> },
  { num: '04', title: 'Maintenance', desc: 'Ongoing preventative maintenance, LED replacement, and remote diagnostics.', icon: <HiCog /> },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'Decades of combined experience in LED signage design and installation.', marker: 'SPEC-A' },
  { title: 'Customized Solutions', desc: 'Every sign tailored to your brand, location, and budget.', marker: 'SPEC-B' },
  { title: 'State-of-the-Art Tech', desc: 'Latest LED modules, drivers, and control systems.', marker: 'SPEC-C' },
  { title: 'Sustainability Focus', desc: 'Energy-efficient LED technology reducing power consumption.', marker: 'SPEC-D' },
  { title: 'Comprehensive Support', desc: 'From design to maintenance — single point of contact.', marker: 'SPEC-E' },
  { title: 'Local Expertise', desc: 'Deep NC permitting, zoning, and installation knowledge.', marker: 'SPEC-F' },
];

const portfolio = [
  { title: 'Charlotte Gateway Tower', type: 'LED Monument', icon: <HiLightBulb />, id: 'PRJ-001' },
  { title: 'SouthPark Digital Hub', type: 'Digital Display', icon: <HiCube />, id: 'PRJ-002' },
  { title: 'NoDa Channel Letters', type: 'Lighted Sign', icon: <HiLightBulb />, id: 'PRJ-003' },
  { title: 'Ballantyne EMC', type: 'Message Center', icon: <HiCog />, id: 'PRJ-004' },
  { title: 'University Medical', type: 'Wayfinding', icon: <HiShieldCheck />, id: 'PRJ-005' },
  { title: 'Concord Mills Complex', type: 'LED Board', icon: <HiCube />, id: 'PRJ-006' },
];

const testimonials = [
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign draws customers from the highway — foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all permits and installed our channel letters in one day. Illumination quality is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'Digital menu boards and exterior signage for three locations. On time, on budget, and the results are stunning.' },
];

/* ──── Component ──── */
export default function VariantF() {
  useThemeClass('theme-vf');

  return (
    <div className="vf-page">
      <SEO
        title="Blueprint Technical | ProVizion LED"
        description="Engineering-precision LED signage solutions from ProVizion LED. Custom LED signs, digital displays, and electronic message centers in Charlotte, NC."
        keywords="LED signs, digital signage, Charlotte NC, technical design, blueprint"
        path="/variant-f"
      />

      {/* ═══ HERO ═══ */}
      <section className="vf-hero">
        <div className="vf-hero__crosshair" />
        <div className="vf-hero__inner">
          <div className="vf-hero__content">
            <FadeUp>
              <span className="vf-hero__badge">System Online — ProVizion LED</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="vf-hero__title">
                Precision-Engineered <span>LED Signage</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="vf-hero__sub">
                From technical specifications to installed reality. ProVizion LED
                delivers engineering-grade signage solutions built with manufacturing
                precision and installed by certified professionals.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="vf-hero__actions">
                <a href="#contact" className="vf-btn vf-btn--filled">
                  Request Specifications <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="vf-btn vf-btn--ghost">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="vf-hero__specs">
              <div className="vf-hero__specs-title">◆ System Specifications</div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">Projects Completed</span><span className="vf-hero__spec-value">500+</span></div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">Client Satisfaction</span><span className="vf-hero__spec-value">{COMPANY.rating}.0 / 5.0</span></div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">Verified Reviews</span><span className="vf-hero__spec-value">{COMPANY.reviewCount}+</span></div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">Support Uptime</span><span className="vf-hero__spec-value">24/7/365</span></div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">Service Region</span><span className="vf-hero__spec-value">North Carolina</span></div>
              <div className="vf-hero__spec-row"><span className="vf-hero__spec-label">HQ Location</span><span className="vf-hero__spec-value">Charlotte, NC</span></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vf-section vf-section--alt">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Service Catalog</span>
            <h2 className="vf-heading">Signage Solutions</h2>
            <p className="vf-subtitle">Full-spectrum LED signage from concept through deployment.</p>
          </FadeUp>
          <StaggerWrap className="vf-services__grid">
            {services.map((s) => (
              <StaggerChild key={s.title} className="vf-service-card">
                <span className="vf-service-card__num">{s.id}</span>
                <div className="vf-service-card__icon">{s.icon}</div>
                <h3 className="vf-service-card__title">{s.title}</h3>
                <p className="vf-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vf-section">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Execution Pipeline</span>
            <h2 className="vf-heading">Build Process</h2>
            <p className="vf-subtitle">Four-phase pipeline from specification to installation.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="vf-process__flow">
              {processSteps.map((s) => (
                <div className="vf-process-step" key={s.num}>
                  <div className="vf-process-step__header">
                    <span className="vf-process-step__num">{s.num}</span>
                    <span className="vf-process-step__icon">{s.icon}</span>
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vf-section vf-section--alt">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Enterprise Integration</span>
            <h2 className="vf-heading">Multi-Location Programs</h2>
          </FadeUp>
          <div className="vf-b2b__inner">
            <FadeUp className="vf-b2b__text">
              <p>
                ProVizion LED partners with franchises, property management groups, and
                multi-location businesses to deliver consistent signage programs at scale.
                We manage the full lifecycle from brand-compliant design through coordinated
                multi-site installations.
              </p>
              <div className="vf-b2b__checklist">
                <div className="vf-b2b__check"><HiCheckCircle /> Franchise-ready sign packages</div>
                <div className="vf-b2b__check"><HiCheckCircle /> Dedicated account management</div>
                <div className="vf-b2b__check"><HiCheckCircle /> Volume pricing tiers</div>
                <div className="vf-b2b__check"><HiCheckCircle /> Nationwide installation coordination</div>
              </div>
              <a href="#contact" className="vf-btn vf-btn--filled">
                Request Enterprise Info <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="vf-b2b__spec-card">
                <h3>◆ Enterprise Specifications</h3>
                <div className="vf-b2b__spec-row"><span>Deployment Scale</span><span>1 – 500+ Sites</span></div>
                <div className="vf-b2b__spec-row"><span>Lead Time</span><span>2 – 8 Weeks</span></div>
                <div className="vf-b2b__spec-row"><span>Warranty</span><span>5 – 10 Years</span></div>
                <div className="vf-b2b__spec-row"><span>Support Level</span><span>Priority 24/7</span></div>
                <div className="vf-b2b__spec-row"><span>Brand Compliance</span><span>100% Guaranteed</span></div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vf-section">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Competitive Analysis</span>
            <h2 className="vf-heading">Why ProVizion LED</h2>
            <p className="vf-subtitle">Technical advantages that differentiate our approach.</p>
          </FadeUp>
          <StaggerWrap className="vf-why__grid">
            {whyChoose.map((w) => (
              <StaggerChild key={w.title} className="vf-why-card">
                <span className="vf-why-card__marker">{w.marker}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vf-section vf-section--alt">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Project Archive</span>
            <h2 className="vf-heading">Completed Installations</h2>
            <p className="vf-subtitle">Recent projects from the ProVizion build log.</p>
          </FadeUp>
          <StaggerWrap className="vf-portfolio__grid">
            {portfolio.map((p) => (
              <StaggerChild key={p.title} className="vf-portfolio-card">
                <span className="vf-portfolio-card__id">{p.id}</span>
                <div className="vf-portfolio-card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <span>{p.type}</span>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vf-section">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Client Feedback Log</span>
            <h2 className="vf-heading">Verified Reviews</h2>
            <p className="vf-subtitle">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.</p>
          </FadeUp>
          <StaggerWrap className="vf-testimonials__grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vf-testimonial-card">
                <div className="vf-testimonial-card__stars">
                  {Array.from({ length: t.rating }, (_, i) => <HiStar key={i} />)}
                </div>
                <p className="vf-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="vf-testimonial-card__author">{t.name}</div>
                <div className="vf-testimonial-card__role">{t.business}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="vf-section vf-section--alt" id="contact">
        <div className="vf-container">
          <FadeUp>
            <span className="vf-kicker">Submit Request</span>
            <h2 className="vf-heading">Start Your Project</h2>
            <p className="vf-subtitle">Submit your project specifications and we&apos;ll respond within 24 hours.</p>
          </FadeUp>
          <div className="vf-contact__inner">
            <FadeUp className="vf-contact__info">
              <div className="vf-contact__info-item">
                <HiPhone className="vf-contact__info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vf-contact__info-item">
                <HiMail className="vf-contact__info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vf-contact__info-item">
                <HiLocationMarker className="vf-contact__info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="vf-contact__info-item">
                <HiClock className="vf-contact__info-icon" />
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vf-contact__form-wrap">
              <QuoteForm source="variant-f-blueprint" />
              <p className="vf-contact__tcpa">
                By submitting this form, you consent to receive marketing communications from ProVizion LED.
                Message and data rates may apply. You can opt out at any time.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
