import { useState, useEffect } from 'react';
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
  HiCheckCircle,
  HiLocationMarker,
  HiMail,
  HiClock,
  HiX,
  HiChip,
  HiLightningBolt,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantD.css';

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
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerChild({ children, className = '' }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Custom-designed to maximize visibility and brand impact day and night.', icon: <HiLightBulb /> },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Update messaging remotely with vibrant, high-resolution screens.', icon: <HiCube /> },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage that combines artistry with engineering. Channel letters, cabinet signs, and more.', icon: <HiLightBulb /> },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage that establishes a commanding presence. Custom-built for entrances and high-visibility locations.', icon: <HiCube /> },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Perfect for promotions, events, and community updates.', icon: <HiCog /> },
  { title: 'Electronic Message Centers', desc: 'Sophisticated electronic displays with full-color capabilities. Enterprise-grade digital signage for maximum audience engagement.', icon: <HiChip /> },
];

const processSteps = [
  { num: '01', cmd: 'init_design()', title: 'Design', desc: 'Collaborative design process tailored to your brand with detailed 3D renderings and engineering specs.' },
  { num: '02', cmd: 'run_fabrication()', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC, LED modules, and quality-controlled assembly.' },
  { num: '03', cmd: 'deploy_install()', title: 'Installation', desc: 'Expert installation by certified crews. We handle permits, structural engineering, and electrical.' },
  { num: '04', cmd: 'start_maintenance()', title: 'Maintenance', desc: 'Ongoing support with preventative maintenance, LED replacement, and remote diagnostics.' },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'Decades of combined experience in LED signage design, engineering, and installation.' },
  { title: 'Customized Solutions', desc: 'Every sign is tailored to your brand, location, and budget — no templates.' },
  { title: 'State-of-the-Art Tech', desc: 'Latest LED modules, drivers, and control systems for maximum performance.' },
  { title: 'Sustainability Focus', desc: 'Energy-efficient LED technology reducing power consumption while maximizing brightness.' },
  { title: 'Comprehensive Support', desc: 'From design to maintenance — your single point of contact for all signage.' },
  { title: 'Local Expertise', desc: 'Deep knowledge of North Carolina permitting, zoning, and installation requirements.' },
];

const portfolio = [
  { title: 'Downtown LED Tower', type: 'Monument Sign', color: 'pink', icon: <HiLightBulb /> },
  { title: 'Metro Digital Hub', type: 'Digital Display', color: 'purple', icon: <HiCube /> },
  { title: 'NightOwl Channel Letters', type: 'Lighted Sign', color: 'cyan', icon: <HiLightningBolt /> },
  { title: 'Pulse Arena Board', type: 'Message Board', color: 'pink', icon: <HiChip /> },
  { title: 'Beacon Medical Center', type: 'Monument Sign', color: 'purple', icon: <HiShieldCheck /> },
  { title: 'Uptown Retail Complex', type: 'Electronic Display', color: 'cyan', icon: <HiCube /> },
];

const testimonials = [
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of the illumination is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
];

/* ──── Component ──── */
export default function VariantD() {
  useThemeClass('theme-vd');
  const [showCta, setShowCta] = useState(false);

  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vd-page">
      <div className="vd-scanline-overlay" />

      <SEO
        title="Neon Pulse | ProVizion LED"
        description="Cyberpunk-inspired LED signage solutions from ProVizion LED. Custom LED signs, digital displays, and electronic message centers in Charlotte, NC."
        keywords="LED signs, digital signage, Charlotte NC, cyberpunk design, neon signs"
        path="/variant-d"
      />

      {/* ═══ HERO ═══ */}
      <section className="vd-hero">
        <div className="vd-hero__grid-bg" />
        <div className="vd-hero__glow vd-hero__glow--pink" />
        <div className="vd-hero__glow vd-hero__glow--purple" />
        <div className="vd-hero__content">
          <FadeUp>
            <span className="vd-hero__tag">// Charlotte&apos;s LED Pulse</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="vd-hero__title">
              <span>Illuminate</span> Your Brand&apos;s Future
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="vd-hero__sub">
              Custom-engineered LED signage solutions that command attention and drive results.
              From concept through installation, ProVizion LED delivers cutting-edge visibility
              for businesses across North Carolina.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="vd-hero__actions">
              <a href="#contact" className="vd-btn vd-btn--pink">
                Get a Free Quote <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vd-btn vd-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="vd-hero__stats">
              <div className="vd-hero__stat">
                <div className="vd-hero__stat-value">500+</div>
                <div className="vd-hero__stat-label">Signs Deployed</div>
              </div>
              <div className="vd-hero__stat">
                <div className="vd-hero__stat-value">{COMPANY.reviewCount}+</div>
                <div className="vd-hero__stat-label">5-Star Reviews</div>
              </div>
              <div className="vd-hero__stat">
                <div className="vd-hero__stat-value">24/7</div>
                <div className="vd-hero__stat-label">Support Active</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vd-section">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// services.list()</span>
            <h2 className="vd-section-heading">Signage Solutions</h2>
            <p className="vd-section-sub">Full-spectrum LED signage services from concept to deployment.</p>
          </FadeUp>
          <StaggerWrap className="vd-services__grid">
            {services.map((s) => (
              <StaggerChild key={s.title} className="vd-service-card">
                <div className="vd-service-card__icon">{s.icon}</div>
                <h3 className="vd-service-card__title">{s.title}</h3>
                <p className="vd-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="vd-section vd-section--alt">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// process.execute()</span>
            <h2 className="vd-section-heading">How We Build</h2>
            <p className="vd-section-sub">Four-phase pipeline from first pixel to final installation.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="vd-process__terminal">
              <div className="vd-process__terminal-bar">
                <span className="vd-process__terminal-dot" />
                <span className="vd-process__terminal-dot" />
                <span className="vd-process__terminal-dot" />
                <span className="vd-process__terminal-title">provizion-pipeline — zsh</span>
              </div>
              <div className="vd-process__steps">
                {processSteps.map((s) => (
                  <div className="vd-process-step" key={s.num}>
                    <span className="vd-process-step__num">{s.num}</span>
                    <div className="vd-process-step__content">
                      <h4><span className="vd-process-step__line">$</span> {s.cmd} <span style={{ color: 'var(--vd-text-muted)' }}>// {s.title}</span></h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vd-section vd-b2b">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// enterprise.connect()</span>
            <h2 className="vd-section-heading">Enterprise & Multi-Location</h2>
          </FadeUp>
          <div className="vd-b2b__content">
            <FadeUp className="vd-b2b__text">
              <p>
                ProVizion LED partners with franchises, property management groups, and
                multi-location businesses to deliver consistent signage programs at scale.
                We manage the entire lifecycle from brand-compliant design through coordinated
                multi-site installations.
              </p>
              <div className="vd-b2b__features">
                <div className="vd-b2b__feature">
                  <HiCheckCircle className="vd-b2b__feature-icon" />
                  <div className="vd-b2b__feature-text">
                    <h4>Franchise-Ready Programs</h4>
                    <p>Standardized sign packages that maintain brand consistency across every location.</p>
                  </div>
                </div>
                <div className="vd-b2b__feature">
                  <HiCheckCircle className="vd-b2b__feature-icon" />
                  <div className="vd-b2b__feature-text">
                    <h4>Dedicated Account Management</h4>
                    <p>A single point of contact for all your signage needs across multiple sites.</p>
                  </div>
                </div>
                <div className="vd-b2b__feature">
                  <HiCheckCircle className="vd-b2b__feature-icon" />
                  <div className="vd-b2b__feature-text">
                    <h4>Volume Pricing</h4>
                    <p>Competitive pricing tiers for multi-location rollouts and ongoing programs.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vd-b2b__visual">
              <div className="vd-b2b__badge">
                <div className="vd-b2b__badge-icon"><HiShieldCheck /></div>
                <h3>Trusted Partner</h3>
                <p>Serving businesses across NC since day one</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vd-section vd-section--alt">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// advantages.map()</span>
            <h2 className="vd-section-heading">Why ProVizion LED</h2>
            <p className="vd-section-sub">The competitive edge that makes us different.</p>
          </FadeUp>
          <StaggerWrap className="vd-why__grid">
            {whyChoose.map((w, i) => (
              <StaggerChild key={w.title} className="vd-why-card">
                <div className="vd-why-card__num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vd-section">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// portfolio.showcase()</span>
            <h2 className="vd-section-heading">Featured Projects</h2>
            <p className="vd-section-sub">Recent installations that define our craft.</p>
          </FadeUp>
          <StaggerWrap className="vd-portfolio__grid">
            {portfolio.map((p) => (
              <StaggerChild key={p.title} className="vd-portfolio-card">
                <div className={`vd-portfolio-card__visual vd-portfolio-card__visual--${p.color}`}>
                  {p.icon}
                </div>
                <div className="vd-portfolio-card__body">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vd-section vd-section--alt">
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// reviews.render()</span>
            <h2 className="vd-section-heading">Client Reviews</h2>
            <p className="vd-section-sub">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.</p>
          </FadeUp>
          <StaggerWrap className="vd-testimonials__grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vd-testimonial-card">
                <div className="vd-testimonial-card__stars">
                  {Array.from({ length: t.rating }, (_, i) => <HiStar key={i} />)}
                </div>
                <p className="vd-testimonial-card__quote">&ldquo;{t.text}&rdquo;</p>
                <div className="vd-testimonial-card__author">{t.name}</div>
                <div className="vd-testimonial-card__role">{t.business}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="vd-section" id="contact" ref={contactRef}>
        <div className="vd-container">
          <FadeUp>
            <span className="vd-kicker">// contact.init()</span>
            <h2 className="vd-section-heading">Start Your Project</h2>
            <p className="vd-section-sub">Tell us about your vision and we&apos;ll light the way.</p>
          </FadeUp>
          <div className="vd-contact__inner">
            <FadeUp className="vd-contact__info">
              <div className="vd-contact__info-item">
                <HiPhone className="vd-contact__info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vd-contact__info-item">
                <HiMail className="vd-contact__info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vd-contact__info-item">
                <HiLocationMarker className="vd-contact__info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="vd-contact__info-item">
                <HiClock className="vd-contact__info-icon" />
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vd-contact__form-wrap">
              <QuoteForm source="variant-d-neon-pulse" />
              <p className="vd-contact__tcpa">
                By submitting this form, you consent to receive marketing communications from ProVizion LED.
                Message and data rates may apply. You can opt out at any time.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <div className="vd-footer">
        <div className="vd-container">
          <div className="vd-footer__brand">ProVizion <span>LED</span></div>
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="vd-footer__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/">All Variants</Link>
          </div>
        </div>
      </div>

      {/* ═══ FLOATING CTA ═══ */}
      {showCta && !contactInView && (
        <motion.div
          className="vd-floating-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <a href="#contact" className="vd-btn vd-btn--pink">
            Get a Free Quote <HiArrowRight />
          </a>
        </motion.div>
      )}
    </div>
  );
}
