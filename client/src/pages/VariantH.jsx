/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react';
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
import './VariantH.css';

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
  { icon: <HiLightBulb />, title: 'LED Channel Letters', desc: 'Bright, energy-efficient channel letters that make your storefront impossible to miss — day or night.' },
  { icon: <HiCurrencyDollar />, title: 'Monument Signs', desc: 'Elegant ground-level monument signs that project permanence, prestige, and professionalism.' },
  { icon: <HiShieldCheck />, title: 'Pylon & Pole Signs', desc: 'High-visibility pylon signs engineered to capture traffic from hundreds of feet away on busy roads.' },
  { icon: <HiLocationMarker />, title: 'Wayfinding Systems', desc: 'Clear, branded wayfinding signage that guides visitors seamlessly through your facility.' },
  { icon: <HiUserGroup />, title: 'Digital Displays', desc: 'Dynamic electronic message centers that let you update promotions, events, and messaging in real time.' },
  { icon: <HiTruck />, title: 'Vehicle Wraps', desc: 'Full and partial vehicle wraps that turn your fleet into mobile billboards seen by thousands daily.' },
];

const PROCESS = [
  { num: '1', title: 'Free Consultation', desc: 'We listen to your goals, assess site conditions, and define scope.' },
  { num: '2', title: 'Design & Permit', desc: 'Custom design mockups created. We handle all permitting paperwork.' },
  { num: '3', title: 'Fabrication', desc: 'Precision manufacturing in our facility with rigorous quality checks.' },
  { num: '4', title: 'Install & Support', desc: 'Professional install crew. Backed by ongoing maintenance plans.' },
];

const B2B_PERKS = [
  'Volume pricing for multi-location rollouts',
  'Dedicated account manager assigned to you',
  'National installation network coverage',
  'Brand consistency audits & guidelines',
  'Priority turnaround on urgent projects',
];

const WHY_US = [
  { icon: <HiClock />, title: 'Fast Turnaround', desc: 'Most projects completed in 4–6 weeks from approval to installation.' },
  { icon: <HiShieldCheck />, title: '5-Year Warranty', desc: 'Industry-leading coverage on all materials, LEDs, and workmanship.' },
  { icon: <HiThumbUp />, title: '62+ 5-Star Reviews', desc: 'Trusted by businesses across the Carolinas with a perfect rating.' },
  { icon: <HiCurrencyDollar />, title: 'Transparent Pricing', desc: 'Honest, no-surprise quotes. What we quote is what you pay.' },
  { icon: <HiLightBulb />, title: 'Energy Efficient', desc: 'LED technology that cuts energy costs up to 70% vs traditional signs.' },
  { icon: <HiUserGroup />, title: 'Local & Responsive', desc: 'Charlotte-based team that picks up the phone and shows up on time.' },
];

const PORTFOLIO = [
  { title: 'Meridian Health Campus', type: 'Monument Sign', visual: '🏥', variant: 'coral' },
  { title: 'Apex Auto Dealership', type: 'LED Channel Letters', visual: '🚗', variant: 'amber' },
  { title: 'Parkside Commons', type: 'Wayfinding System', visual: '🏢', variant: 'coral' },
  { title: 'Harbor Brewing Co.', type: 'Illuminated Sign', visual: '🍺', variant: 'amber' },
  { title: 'Summit Church', type: 'Digital Display', visual: '⛪', variant: 'coral' },
  { title: 'QuickServe Drive-Thru', type: 'Pylon Sign', visual: '🍔', variant: 'amber' },
];

const TESTIMONIALS = [
  { text: "ProVizion transformed our storefront with gorgeous LED letters. We've seen a noticeable jump in foot traffic since the install. Could not be happier.", author: 'Rachel M.', role: 'Owner, Bloom Boutique' },
  { text: 'The team was professional, timely, and the quality of our monument sign exceeded expectations. They handled permits seamlessly which saved us weeks.', author: 'David K.', role: 'Property Manager' },
  { text: "Honestly the best investment we've made for our business. Our pylon sign is visible from the highway and has driven real, measurable results.", author: 'Marcus T.', role: 'Franchise Owner' },
];

/* ──── Component ──── */
export default function VariantH() {
  useThemeClass('theme-vh');

  return (
    <div className="vh-page">
      <SEO
        title={`Custom LED Signs Charlotte NC | ${COMPANY.name}`}
        description="Charlotte's trusted LED sign company. Channel letters, monument signs, digital displays & more. Free consultation — call today."
        keywords="LED signs Charlotte, custom business signs, monument signs NC, channel letters, ProVizion LED"
        path="/variant-h"
      />

      {/* ═══ HERO ═══ */}
      <section className="vh-hero">
        <div className="vh-hero__warm-circle" />
        <div className="vh-hero__inner">
          <FadeUp className="vh-hero__content">
            <span className="vh-hero__badge">
              <span className="vh-hero__badge-dot" />
              Charlotte&apos;s #1 Sign Company
            </span>
            <h1 className="vh-hero__title">
              Signs That <em>Attract</em> Customers &amp; Grow Your Business
            </h1>
            <p className="vh-hero__sub">
              Custom LED signs, monument signs, and digital displays — designed to
              grab attention, build trust, and drive more foot traffic to your door.
            </p>
            <div className="vh-hero__actions">
              <a href="#vh-contact" className="vh-btn vh-btn--coral">
                Get a Free Quote <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vh-btn vh-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
            <div className="vh-hero__trust">
              <span className="vh-hero__trust-item">
                <HiStar /> {COMPANY.rating}.0 Rating
              </span>
              <span className="vh-hero__trust-item">
                <HiCheckCircle /> {COMPANY.reviewCount}+ Reviews
              </span>
              <span className="vh-hero__trust-item">
                <HiShieldCheck /> Licensed &amp; Insured
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="vh-hero__card">
            <div className="vh-hero__card-stars">
              {[...Array(5)].map((_, i) => <HiStar key={i} />)}
            </div>
            <div className="vh-hero__card-rating">{COMPANY.rating}.0</div>
            <p className="vh-hero__card-label">{COMPANY.reviewCount} verified reviews</p>
            <div className="vh-hero__card-stats">
              <div>
                <div className="vh-hero__card-stat-value">500+</div>
                <div className="vh-hero__card-stat-label">Signs Installed</div>
              </div>
              <div>
                <div className="vh-hero__card-stat-value">10+</div>
                <div className="vh-hero__card-stat-label">Years Experience</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vh-section">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">Our Services</span>
            <h2 className="vh-heading">Everything Your Business Needs to Stand Out</h2>
            <p className="vh-subtitle">
              From illuminated channel letters to full digital displays — we design, fabricate, and
              install signage that works as hard as you do.
            </p>
          </FadeUp>
          <StaggerWrap className="vh-services__grid">
            {SERVICES.map((s, i) => (
              <StaggerChild key={i} className="vh-service-card">
                <div className="vh-service-card__icon">{s.icon}</div>
                <h3 className="vh-service-card__title">{s.title}</h3>
                <p className="vh-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <div className="vh-cta-banner">
        <p className="vh-cta-banner__text">Ready to upgrade your signage? Let&apos;s talk — no pressure.</p>
        <a href="#vh-contact" className="vh-btn vh-btn--white">
          Get Your Free Quote <HiArrowRight />
        </a>
      </div>

      {/* ═══ PROCESS ═══ */}
      <section className="vh-section vh-section--warm">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">How It Works</span>
            <h2 className="vh-heading">Simple, Transparent, Stress-Free</h2>
            <p className="vh-subtitle">
              From concept to install, we guide you through every step — so you can focus on running your business.
            </p>
          </FadeUp>
          <StaggerWrap className="vh-process__steps">
            {PROCESS.map((step, i) => (
              <StaggerChild key={i} className="vh-process-step">
                <div className="vh-process-step__circle">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vh-section vh-section--navy">
        <div className="vh-container">
          <div className="vh-b2b__inner">
            <FadeUp className="vh-b2b__text">
              <span className="vh-kicker">B2B &amp; Multi-Location</span>
              <h2 className="vh-heading">National Reach, Local Care</h2>
              <p>
                Managing signage across multiple locations? We simplify the process with
                dedicated account management, volume pricing, and a nationwide install network.
              </p>
              <div className="vh-b2b__list">
                {B2B_PERKS.map((perk, i) => (
                  <div key={i} className="vh-b2b__list-item">
                    <HiCheckCircle /> {perk}
                  </div>
                ))}
              </div>
              <a href="#vh-contact" className="vh-btn vh-btn--amber">
                Request B2B Pricing <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vh-b2b__card">
              <div className="vh-b2b__card-icon">🤝</div>
              <h3>Partner With Us</h3>
              <p>Join 50+ businesses that trust ProVizion for their signage programs nationwide.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vh-section">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">Why ProVizion</span>
            <h2 className="vh-heading">The ProVizion Difference</h2>
            <p className="vh-subtitle">
              We&apos;re not just a sign shop — we&apos;re your signage partner from day one.
            </p>
          </FadeUp>
          <StaggerWrap className="vh-why__grid">
            {WHY_US.map((item, i) => (
              <StaggerChild key={i} className="vh-why-card">
                <div className="vh-why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vh-section vh-section--warm">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">Our Work</span>
            <h2 className="vh-heading">Recent Projects</h2>
            <p className="vh-subtitle">
              A selection of signs we&apos;ve designed, fabricated, and installed for businesses like yours.
            </p>
          </FadeUp>
          <StaggerWrap className="vh-portfolio__grid">
            {PORTFOLIO.map((p, i) => (
              <StaggerChild key={i} className="vh-portfolio-card">
                <div className={`vh-portfolio-card__visual vh-portfolio-card__visual--${p.variant}`}>
                  {p.visual}
                </div>
                <div className="vh-portfolio-card__body">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vh-section">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">Testimonials</span>
            <h2 className="vh-heading">What Our Clients Say</h2>
            <p className="vh-subtitle">
              Don&apos;t take our word for it — hear from businesses that chose ProVizion.
            </p>
          </FadeUp>
          <StaggerWrap className="vh-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <StaggerChild key={i} className="vh-testimonial-card">
                <div className="vh-testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <HiStar key={j} />)}
                </div>
                <p className="vh-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <p className="vh-testimonial-card__author">{t.author}</p>
                <p className="vh-testimonial-card__role">{t.role}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER 2 ═══ */}
      <div className="vh-cta-banner">
        <p className="vh-cta-banner__text">Your sign is the first impression — make it count.</p>
        <a href="#vh-contact" className="vh-btn vh-btn--white">
          Start Your Project <HiArrowRight />
        </a>
      </div>

      {/* ═══ CONTACT ═══ */}
      <section id="vh-contact" className="vh-section vh-section--warm">
        <div className="vh-container">
          <FadeUp>
            <span className="vh-kicker">Contact Us</span>
            <h2 className="vh-heading">Get Your Free Sign Consultation</h2>
            <p className="vh-subtitle">
              Fill out the form below and a signage specialist will reach out within 24 hours.
            </p>
          </FadeUp>
          <div className="vh-contact__inner">
            <FadeUp className="vh-contact__info">
              <div className="vh-contact__info-item">
                <div className="vh-contact__info-icon"><HiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vh-contact__info-item">
                <div className="vh-contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vh-contact__info-item">
                <div className="vh-contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vh-contact__form-wrap">
              <QuoteForm source="variant-h" />
              <p className="vh-contact__tcpa">
                By submitting this form, you agree to receive calls/texts from {COMPANY.name}.
                Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER BAR ═══ */}
      <div className="vh-footerbar">
        <p className="vh-footerbar__brand">
          Pro<em>Vizion</em> LED
        </p>
        <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <div className="vh-footerbar__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>

      {/* ═══ FLOATING CTA ═══ */}
      <div className="vh-floating-cta">
        <a href="#vh-contact" className="vh-btn vh-btn--coral">
          Free Quote <HiArrowRight />
        </a>
      </div>
    </div>
  );
}
