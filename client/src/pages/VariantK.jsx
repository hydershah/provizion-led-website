/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, useEffect } from 'react';
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
import './VariantK.css';

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
  { icon: <HiLightBulb />, title: 'Channel Letters', desc: 'Hand-bent channel letters with precision-welded returns and energy-efficient LEDs. Each letter shaped and soldered by our master fabricators.' },
  { icon: <HiCurrencyDollar />, title: 'Monument Signs', desc: 'Precision-welded monument signs built to anchor your entrance with authority. Stone, metal, and illuminated options crafted in-house.' },
  { icon: <HiShieldCheck />, title: 'Pylon & Pole Signs', desc: 'Towering pylon signs engineered for maximum highway visibility. Steel-fabricated structures with illuminated cabinet faces.' },
  { icon: <HiLocationMarker />, title: 'Wayfinding Systems', desc: 'Hand-finished directional signage that guides visitors with clarity and style. ADA-compliant with artisan detailing.' },
  { icon: <HiUserGroup />, title: 'Digital Displays', desc: 'Full-color electronic message centers with crisp resolution. Programmed and installed by our technical specialists.' },
  { icon: <HiTruck />, title: 'Cabinet & Box Signs', desc: 'Seamlessly welded aluminum cabinets with translucent faces and LED backlighting. Built for decades of reliable illumination.' },
];

const PROCESS = [
  { num: '01', title: 'The Consultation', desc: 'We sit down with you to understand your brand, your site, and your vision. Every great sign starts with a great conversation.' },
  { num: '02', title: 'The Blueprint', desc: 'Our designers translate your vision into detailed renderings, engineering specs, and permit-ready drawings.' },
  { num: '03', title: 'The Workshop', desc: 'Our master fabricators cut, weld, wire, and assemble your sign by hand in our Charlotte facility. Quality at every joint.' },
  { num: '04', title: 'The Reveal', desc: 'Our installation crew brings your sign to life on-site. Structural, electrical, and final adjustments — done right the first time.' },
];

const B2B_PERKS = [
  'Volume pricing for multi-location sign programs',
  'Dedicated account manager for your brand',
  'Nationwide installation coordination',
  'Brand consistency audits across all sites',
  'Priority workshop scheduling on urgent projects',
];

const WHY_US = [
  { icon: <HiShieldCheck />, title: 'Master Fabricators', desc: 'Skilled welders, benders, and electricians with decades of combined sign-making experience.' },
  { icon: <HiThumbUp />, title: 'Handcrafted Quality', desc: 'Every sign is built by hand in our Charlotte workshop — no outsourced production, no shortcuts.' },
  { icon: <HiClock />, title: 'On-Time Delivery', desc: 'We respect your timeline. Most projects completed in 4-6 weeks from design approval.' },
  { icon: <HiCurrencyDollar />, title: 'Honest Pricing', desc: 'Transparent quotes with no hidden fees. The price we quote is the price you pay.' },
  { icon: <HiLightBulb />, title: 'Energy-Efficient LEDs', desc: 'Premium LED modules that cut energy costs up to 70% while delivering superior brightness.' },
  { icon: <HiUserGroup />, title: 'Local Craftsmen', desc: 'Charlotte-based team with deep local permitting knowledge and fast response times.' },
];

const PORTFOLIO = [
  { title: 'Meridian Health Campus', type: 'Monument Sign', visual: '🏥', variant: 'terra' },
  { title: 'Apex Auto Dealership', type: 'Channel Letters', visual: '🚗', variant: 'gold' },
  { title: 'Parkside Commons', type: 'Wayfinding System', visual: '🏢', variant: 'terra' },
  { title: 'Harbor Brewing Co.', type: 'Illuminated Cabinet', visual: '🍺', variant: 'gold' },
  { title: 'Summit Church', type: 'Digital Display', visual: '⛪', variant: 'terra' },
  { title: 'QuickServe Drive-Thru', type: 'Pylon Sign', visual: '🍔', variant: 'gold' },
];

const TESTIMONIALS = [
  { text: 'The craftsmanship is unreal. You can see the difference between a mass-produced sign and what ProVizion builds. Our channel letters look like works of art.', author: 'Rachel M.', role: 'Owner, Bloom Boutique' },
  { text: 'From the first consultation to the final reveal, their attention to detail was remarkable. They handled every permit and installed our monument sign in a single day.', author: 'David K.', role: 'Property Manager' },
  { text: 'We needed signage for three locations with consistent quality. ProVizion delivered each one on time with the same handcrafted precision. True artisans.', author: 'Marcus T.', role: 'Franchise Owner' },
];

/* ──── Component ──── */
export default function VariantK() {
  useThemeClass('theme-vk');
  const [showCta, setShowCta] = useState(false);
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { margin: '-100px' });

  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vk-page">
      <SEO
        title={`Artisan LED Signs Charlotte NC | ${COMPANY.name}`}
        description="Handcrafted LED signs by Charlotte's master fabricators. Channel letters, monument signs, digital displays & more. Free consultation — call today."
        keywords="LED signs Charlotte, handcrafted signs, custom business signs, monument signs NC, channel letters, artisan signage, ProVizion LED"
        path="/variant-k"
      />

      {/* ═══ HERO ═══ */}
      <section className="vk-hero">
        <div className="vk-hero__grain" />
        <div className="vk-hero__inner">
          <FadeUp className="vk-hero__content">
            <span className="vk-hero__badge">
              <span className="vk-hero__badge-line" />
              Charlotte&apos;s Artisan Sign Makers
            </span>
            <h1 className="vk-hero__title">
              Crafted to <em>Command</em> Attention
            </h1>
            <p className="vk-hero__sub">
              Every weld, every LED, every letter — shaped by hand in our Charlotte workshop.
              We don&apos;t mass-produce signs. We craft them.
            </p>
            <div className="vk-hero__actions">
              <a href="#vk-contact" className="vk-btn vk-btn--terra">
                Commission Your Sign <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vk-btn vk-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
            <div className="vk-hero__trust">
              <span className="vk-hero__trust-item">
                <HiStar /> {COMPANY.rating}.0 Rating
              </span>
              <span className="vk-hero__trust-item">
                <HiCheckCircle /> {COMPANY.reviewCount}+ Reviews
              </span>
              <span className="vk-hero__trust-item">
                <HiShieldCheck /> Licensed &amp; Insured
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="vk-hero__visual">
            <div className="vk-hero__visual-texture" />
            <div className="vk-hero__visual-content">
              <div className="vk-hero__visual-stat">
                <div className="vk-hero__visual-stat-value">500+</div>
                <div className="vk-hero__visual-stat-label">Signs Handcrafted</div>
              </div>
              <div className="vk-hero__visual-divider" />
              <div className="vk-hero__visual-stats-row">
                <div className="vk-hero__visual-mini-stat">
                  <div className="vk-hero__visual-mini-value">{COMPANY.reviewCount}+</div>
                  <div className="vk-hero__visual-mini-label">Reviews</div>
                </div>
                <div className="vk-hero__visual-mini-stat">
                  <div className="vk-hero__visual-mini-value">{COMPANY.rating}.0</div>
                  <div className="vk-hero__visual-mini-label">Rating</div>
                </div>
                <div className="vk-hero__visual-mini-stat">
                  <div className="vk-hero__visual-mini-value">10+</div>
                  <div className="vk-hero__visual-mini-label">Years</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vk-section">
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">Our Craft</span>
            <h2 className="vk-heading">What We Build by Hand</h2>
            <p className="vk-subtitle">
              Every sign leaves our workshop with the precision of engineering and the soul of craftsmanship.
            </p>
          </FadeUp>
          <StaggerWrap className="vk-services__grid">
            {SERVICES.map((s) => (
              <StaggerChild key={s.title} className="vk-service-card">
                <div className="vk-service-card__icon">{s.icon}</div>
                <h3 className="vk-service-card__title">{s.title}</h3>
                <p className="vk-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
        <div className="vk-section__divider" />
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <div className="vk-cta-banner">
        <p className="vk-cta-banner__text">Ready to commission a sign built with care?</p>
        <a href="#vk-contact" className="vk-btn vk-btn--cream">
          Commission Your Sign <HiArrowRight />
        </a>
      </div>

      {/* ═══ PROCESS ═══ */}
      <section className="vk-section vk-section--warm">
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">The Process</span>
            <h2 className="vk-heading">From Conversation to Creation</h2>
            <p className="vk-subtitle">
              Four deliberate stages, each one essential. We never rush the craft.
            </p>
          </FadeUp>
          <StaggerWrap className="vk-process__steps">
            {PROCESS.map((step) => (
              <StaggerChild key={step.num} className="vk-process-step">
                <div className="vk-process-step__num">{step.num}</div>
                <h4 className="vk-process-step__title">{step.title}</h4>
                <p className="vk-process-step__desc">{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
        <div className="vk-section__divider" />
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vk-section vk-section--dark">
        <div className="vk-container">
          <div className="vk-b2b__inner">
            <FadeUp className="vk-b2b__text">
              <span className="vk-kicker vk-kicker--gold">Enterprise &amp; Multi-Location</span>
              <h2 className="vk-heading vk-heading--light">Artisan Quality at Scale</h2>
              <p>
                Managing signage across multiple locations? We bring the same handcrafted precision
                to every site — with dedicated account management and volume pricing that makes it
                work for your bottom line.
              </p>
              <div className="vk-b2b__list">
                {B2B_PERKS.map((perk) => (
                  <div key={perk} className="vk-b2b__list-item">
                    <HiCheckCircle /> {perk}
                  </div>
                ))}
              </div>
              <a href="#vk-contact" className="vk-btn vk-btn--gold">
                Request B2B Pricing <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vk-b2b__card">
              <div className="vk-b2b__card-icon">🤝</div>
              <h3>Trusted Partner</h3>
              <p>Join 50+ businesses that trust our artisan workshop for their signage programs.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vk-section">
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">Why ProVizion</span>
            <h2 className="vk-heading">The Artisan Difference</h2>
            <p className="vk-subtitle">
              What sets handcrafted apart from factory-made? Everything.
            </p>
          </FadeUp>
          <StaggerWrap className="vk-why__grid">
            {WHY_US.map((item) => (
              <StaggerChild key={item.title} className="vk-why-card">
                <div className="vk-why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
        <div className="vk-section__divider" />
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vk-section vk-section--warm">
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">Portfolio</span>
            <h2 className="vk-heading">Recent Commissions</h2>
            <p className="vk-subtitle">
              A selection of signs we&apos;ve designed, fabricated, and installed for businesses like yours.
            </p>
          </FadeUp>
          <StaggerWrap className="vk-portfolio__grid">
            {PORTFOLIO.map((p) => (
              <StaggerChild key={p.title} className="vk-portfolio-card">
                <div className={`vk-portfolio-card__visual vk-portfolio-card__visual--${p.variant}`}>
                  {p.visual}
                </div>
                <div className="vk-portfolio-card__body">
                  <span className="vk-portfolio-card__type">{p.type}</span>
                  <h3>{p.title}</h3>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
        <div className="vk-section__divider" />
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vk-section">
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">Testimonials</span>
            <h2 className="vk-heading">Words from Our Clients</h2>
            <p className="vk-subtitle">
              {COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.
            </p>
          </FadeUp>
          <StaggerWrap className="vk-testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <StaggerChild key={t.author} className="vk-testimonial-card">
                <div className="vk-testimonial-card__quote">&ldquo;</div>
                <div className="vk-testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <HiStar key={j} />)}
                </div>
                <p className="vk-testimonial-card__text">{t.text}</p>
                <div className="vk-testimonial-card__author">{t.author}</div>
                <div className="vk-testimonial-card__role">{t.role}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER 2 ═══ */}
      <div className="vk-cta-banner">
        <p className="vk-cta-banner__text">Your sign is a reflection of your craft. So is ours.</p>
        <a href="#vk-contact" className="vk-btn vk-btn--cream">
          Start Your Project <HiArrowRight />
        </a>
      </div>

      {/* ═══ CONTACT ═══ */}
      <section id="vk-contact" className="vk-section vk-section--warm" ref={contactRef}>
        <div className="vk-container">
          <FadeUp>
            <span className="vk-kicker">Contact Us</span>
            <h2 className="vk-heading">Let&apos;s Build Something Together</h2>
            <p className="vk-subtitle">
              Tell us about your project and a signage specialist will reach out within 24 hours.
            </p>
          </FadeUp>
          <div className="vk-contact__inner">
            <FadeUp className="vk-contact__info">
              <div className="vk-contact__info-item">
                <div className="vk-contact__info-icon"><HiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vk-contact__info-item">
                <div className="vk-contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vk-contact__info-item">
                <div className="vk-contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Visit Our Workshop</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="vk-contact__info-item">
                <div className="vk-contact__info-icon"><HiClock /></div>
                <div>
                  <h4>Workshop Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vk-contact__form-wrap">
              <QuoteForm source="variant-k" />
              <p className="vk-contact__tcpa">
                By submitting this form, you agree to receive calls/texts from {COMPANY.name}.
                Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER BAR ═══ */}
      <div className="vk-footerbar">
        <p className="vk-footerbar__brand">
          Pro<em>Vizion</em> LED
        </p>
        <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <div className="vk-footerbar__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/">All Variants</Link>
        </div>
      </div>

      {/* ═══ FLOATING CTA ═══ */}
      {showCta && !contactInView && (
        <motion.div
          className="vk-floating-cta"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
        >
          <a href="#vk-contact" className="vk-btn vk-btn--terra">
            Free Quote <HiArrowRight />
          </a>
        </motion.div>
      )}
    </div>
  );
}
